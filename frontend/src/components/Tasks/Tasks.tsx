import React, { useState, useEffect } from "react";
import { getTasks, Task } from "../../services/taskServices";
import puntos from "../../assets/tres_puntos.png";
import edit from "../../assets/edit.png";
import borrar from "../../assets/delete.png";
import Button from "./Button/Button";

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [menuPosition, setMenuPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 }); // Posición del menú
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null); // ID de la tarea seleccionada
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar la visibilidad del menú
  const [isMenuDelete, setIsMenuDelete] = useState(false); // Estado para controlar la visibilidad del menú

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data.tasks);
    };
    fetchTasks();
    setSelectedButton("Todas");
  }, []);

  const handleButtonClick = (buttonLabel: string) => {
    setSelectedButton(buttonLabel);
  };

  const openMenu = (event: React.MouseEvent, taskId: number) => {
    const { clientX, clientY } = event; // Obtener las coordenadas del clic
    setMenuPosition({ x: clientX - 160, y: clientY }); // Establecer la posición del menú
    setSelectedTaskId(taskId); // Guardar el ID de la tarea seleccionada
    setIsMenuOpen(true); // Abrir el menú
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Cerrar el menú
  };

  const handleEditTask = () => {
    if (selectedTaskId) {
      console.log("Editando tarea con ID:", selectedTaskId);
      // Aquí puedes agregar la lógica para editar la tarea
      closeMenu();
    }
  };

  const handleDeleteTask = () => {
    if (selectedTaskId) {
      console.log("Eliminando tarea con ID:", selectedTaskId);
      // Aquí puedes agregar la lógica para eliminar la tarea
      closeMenu();
      setIsMenuDelete(true)
    }
  };

  return (
    <main className="h-full p-4 bg-gray-100/80">
      <div className="pb-2">
        <h1 className="text-2xl font-semibold mb-4">Lista de Tareas</h1>
        <div className="flex">
          <Button
            buttonLabel="Todas"
            isSelected={selectedButton === "Todas"}
            onClick={() => handleButtonClick("Todas")}
          />
          <Button
            buttonLabel="Completadas"
            isSelected={selectedButton === "Completadas"}
            onClick={() => handleButtonClick("Completadas")}
          />
          <Button
            buttonLabel="Incompletas"
            isSelected={selectedButton === "Incompletas"}
            onClick={() => handleButtonClick("Incompletas")}
          />
        </div>
      </div>
      <div className="overflow-x-auto bg-white">
        <div className="flex justify-between p-2">
          <h1 className="text-lg font-semibold mb-4">Datos de las tareas</h1>
          <button className="bg-[#0061FA] text-white p-[2px] text-[10px] w-[150px] h-[30px] rounded-sm"> + Nueva Tarea</button>
        </div>
        <table className="min-w-full text-xs">
          <thead>
            <tr className="bg-black text-white">
              <th className=" px-4 py-2">ID</th>
              <th className=" px-4 py-2">Título</th>
              <th className=" px-4 py-2">Descripción</th>
              <th className=" px-4 py-2">Completado</th>
              <th className=" px-4 py-2">Creado</th>
              <th className=" px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="border border-gray-100 hover:bg-gray-100">
                <td className=" px-4 py-2">{task.id}</td>
                <td className=" px-4 py-2">{task.title}</td>
                <td className=" px-4 py-2">{task.description}</td>
                <td className=" px-4 py-2">
                  {task.completed ? (
                    <label className="bg-[#B4FEC0] text-[#0E6128] p-[2px] text-[10px] w-[80px] rounded-lg inline-block text-center">Si</label>
                  ) : (
                    <label className="bg-[#FFDFFE] text-[#600E5B] p-[2px] text-[10px] w-[80px] rounded-lg inline-block text-center">No</label>
                  )}
                </td>
                <td className=" px-4 py-2">{new Date(task.createdAt).toLocaleDateString()}</td>
                <td className=" px-4 py-2">
                  <button onClick={(event) => openMenu(event, task.id)}>
                    <img src={puntos} alt="" className="mr-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Menu flotante */}
      {isMenuOpen && selectedTaskId && (
        <div
          className="absolute z-10 bg-white border border-gray-100 rounded-lg shadow-lg w-[150px]"
          style={{ left: `${menuPosition.x}px`, top: `${menuPosition.y}px` }}
        >
          <div className="p-2">
            <button
              className="block w-full text-left p-2 text-[10px]"
              onClick={handleEditTask}
            >
              <div className="flex">

                <img src={edit} alt="" className="mr-4 w-[10px]" />
                Editar tarea
              </div>
            </button>
            <button
              className="block w-full text-left p-2 text-[10px] text-[#FB525A]"
              onClick={handleDeleteTask}
            >
              <div className="flex">

                <img src={borrar} alt="" className="mr-4 w-[10px]" />
                Borrar tarea
              </div>
            </button>
          </div>
          <div className="border-t">
            <button
              className="w-full text-center p-2 text-[10px]"
              onClick={closeMenu}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
      {/* Menu flotante */}
      {isMenuDelete && selectedTaskId && (
        <div
          className="absolute z-10 bg-white border border-gray-100 rounded-lg shadow-lg w-[150px]"
          style={{
            left: `${menuPosition.x}px`,
            top: `${menuPosition.y}px`,
            transform: "translate(-50%, 0)", // Centrar horizontalmente
          }}
        >
          
          <div className="border-t">
            <button
              className="w-full text-center p-2 text-[10px]"
              onClick={closeMenu}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Tasks;
