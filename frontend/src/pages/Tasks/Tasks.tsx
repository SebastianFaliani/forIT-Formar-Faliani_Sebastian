import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteTask, getTasks, Task, updateTask } from "../../services/taskServices";
import puntos from "../../assets/tres_puntos.png";
import Button from "../../components/Button/Button";
import TaskMenu from "../../components/TaskMenu/TaskMenu";

const Tasks = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksOrigin, setTasksOrigin] = useState<Task[]>([]);
  const [selectedButton, setSelectedButton] = useState<string>("Todas");
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    useEffect(() => {
    const fetchTasks = async () => {
      const data: any = await getTasks();
      setTasks(data.tasks);
      setTasksOrigin(data.tasks); 
    };
    fetchTasks();
  }, []);

  const handleButtonClick = (buttonLabel: string) => {
    setSelectedButton(buttonLabel);

    if (buttonLabel === "Todas") {
      setTasks(tasksOrigin);
    } else if (buttonLabel === "Completadas") {
      setTasks(tasksOrigin.filter((task) => task.completed));
    } else if (buttonLabel === "Incompletas") {
      setTasks(tasksOrigin.filter((task) => !task.completed));
    }
  };

  const handleButtonTaskClick = async (task: Task) => {
    await updateTask(task.id, { ...task, completed: !task.completed });
  
    setTasksOrigin((prevTasks) =>
      prevTasks.map((t) => (t.id === task.id ? { ...t, completed: !task.completed } : t))
    );

    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === task.id ? { ...t, completed: !task.completed } : t))
    );
  };
  

   const handleMenuOpen = (event: React.MouseEvent, task: Task) => {
    setMenuPosition({ x: event.pageX, y: event.pageY });
    setSelectedTask(task);
    setMenuOpen(true);
  };

  const handleDeleteTask = async (task: Task) => {
    if (task.id) {
      await deleteTask(task.id);
      setTasksOrigin((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
      handleButtonClick(selectedButton); 
    }
  };

   const handleEditTask = async (task: Task) => {
    navigate("/new-tasks", { state: { isCreate: false, task } });
  };

  return (
    <main className="h-full p-4 bg-gray-100">
      <div className="pb-2">
        <h1 className="text-2xl font-semibold mb-4">Lista de Tareas</h1>
        <div className="flex">
          <Button buttonLabel="Todas" isSelected={selectedButton === "Todas"} onClick={() => handleButtonClick("Todas")} />
          <Button buttonLabel="Completadas" isSelected={selectedButton === "Completadas"} onClick={() => handleButtonClick("Completadas")} />
          <Button buttonLabel="Incompletas" isSelected={selectedButton === "Incompletas"} onClick={() => handleButtonClick("Incompletas")} />
        </div>
      </div>

      <div className="overflow-x-auto bg-white">
        <div className="flex justify-between p-2">
          <h1 className="text-lg font-semibold mb-4">Datos de las tareas</h1>
          <Link className="flex" to="/new-tasks" state={{ isCreate: true }}>
            <button className="bg-[#0061FA] text-white p-[2px] text-[10px] w-[150px] h-[30px] rounded-sm"> + Nueva Tarea</button>
          </Link>
        </div>

        <p className="m-3 text-sm">
          Para cambiar el estado de las tareas dar <span className="text-[#0061FA] font-medium">"click"</span>
        </p>

        <table className="min-w-full text-xs">
          <thead>
            <tr className="bg-black text-white">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Título</th>
              <th className="px-4 py-2">Descripción</th>
              <th className="px-4 py-2">Completado</th>
              <th className="px-4 py-2">Creado</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="border border-gray-100 hover:bg-gray-100">
                <td className="px-4 py-2">{task.id}</td>
                <td className="px-4 py-2">{task.title}</td>
                <td className="px-4 py-2">{task.description}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleButtonTaskClick(task)}
                    className={`p-[2px] text-[10px] w-[80px] rounded-lg inline-block text-center ${
                      task.completed ? "bg-[#B4FEC0] text-[#0E6128]" : "bg-[#FFDFFE] text-[#600E5B]"
                    }`}
                  >
                    {task.completed ? "Si" : "No"}
                  </button>
                </td>
                <td className="px-4 py-2">{new Date(task.createdAt).toLocaleDateString()}</td>
                <td className="px-4 py-2">
                  <button onClick={(event) => handleMenuOpen(event, task)}>
                    <img src={puntos} alt="" className="mr-4" />
                  </button>
                  <TaskMenu
                    isOpen={menuOpen}
                    onClose={() => setMenuOpen(false)}
                    position={menuPosition}
                    onDelete={() => selectedTask && handleDeleteTask(selectedTask)}
                    onEdit={() => selectedTask && handleEditTask(selectedTask)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Tasks;
