import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteTask, getTasks, Task, updateTask } from "../../services/taskServices";
import puntos from "../../assets/tres_puntos.png";
import Button from "../../components/Button/Button";
import TaskMenu from "../../components/TaskMenu/TaskMenu";

const TaskList = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksOrigin, setTasksOrigin] = useState<Task[]>([]);
  const [selectedButton, setSelectedButton] = useState<string>("Todas");
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(15);

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


    setCurrentPage(1);

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


      const updatedTasks = tasksOrigin.filter((t) => t.id !== task.id);
      setTasksOrigin(updatedTasks);

      let filteredTasks = updatedTasks;

      if (selectedButton === "Completadas") {
        filteredTasks = updatedTasks.filter((t) => t.completed);
      } else if (selectedButton === "Incompletas") {
        filteredTasks = updatedTasks.filter((t) => !t.completed);
      }

      setTasks(filteredTasks);
    }
  };


  const handleEditTask = async (task: Task) => {
    navigate("/new-tasks", { state: { isCreate: false, task } });
  };
  
  const handleDetailTask = async (task: Task) => {
    navigate("/detail", { state: {  task } });
  };

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(tasks.length / tasksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <main className="h-full p-4 bg-[#DCF4EE]">
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
          <h1 className="text-lg font-semibold mb-4 text-[15px] sm:text-[28px]">Datos de las tareas</h1>
          <Link className="flex" to="/new-tasks" state={{ isCreate: true }}>
            <button className="bg-[#0061FA] text-white p-[2px] text-[10px] w-[150px] h-[30px] rounded-sm"> + Nueva Tarea</button>
          </Link>
        </div>

        <p className="m-3 text-[12px] sm:text-sm">
          Para cambiar el estado de las tareas dar <span className="text-[#0061FA] font-medium">"click"</span>
        </p>

        <table className="min-w-full text-xs">
          <thead>
            <tr className="bg-black text-white">
              <th className="px-4 py-2 hidden sm:table-cell">ID</th>
              <th className="px-4 py-2 ">Título</th>
              <th className="px-4 py-2 hidden sm:table-cell">Descripción</th>
              <th className="px-4 py-2">Completado</th>
              <th className="px-4 py-2 hidden sm:table-cell">Creado</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {currentTasks.map((task) => (
              <tr key={task.id} className="border border-gray-100 hover:bg-gray-100">
                <td className="px-4 py-2 hidden sm:table-cell">{task.id}</td>
                <td className="px-4 py-2 max-w-[170px] truncate">{task.title}</td>
                <td className="px-4 py-2 truncate hidden sm:table-cell">{task.description}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleButtonTaskClick(task)}
                    className={`p-[2px] text-[10px] w-[80px] rounded-lg inline-block text-center cursor-pointer ${task.completed ? "bg-[#B4FEC0] text-[#0E6128]" : "bg-[#FFDFFE] text-[#600E5B]"
                      }`}
                  >
                    {task.completed ? "Si" : "No"}
                  </button>
                </td>
                <td className="px-4 py-2 hidden sm:table-cell">{new Date(task.createdAt).toLocaleDateString()}</td>
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
                    onDetail={() => selectedTask && handleDetailTask(selectedTask)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Paginación */}
        <div className="flex justify-center mt-4 mb-8">
          <nav>
            <ul className="flex">
              {pageNumbers.map((number) => (
                <li key={number} className="mx-2">
                  <button
                    onClick={() => paginate(number)}
                    className={`p-2 text-sm rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                  >
                    {number}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default TaskList;
