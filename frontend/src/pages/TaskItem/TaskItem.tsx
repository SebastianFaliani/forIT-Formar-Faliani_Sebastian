import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import volver from "../../assets/volver.png";
import { deleteTask } from "../../services/taskServices";


const TaskItem: React.FC = () => {
   const navigate = useNavigate();
  const location = useLocation();
  const { task } = location.state || {};

 const handleEditTask = async () => {
    navigate("/new-tasks", { state: { isCreate: false, task } });
  };

  const handleDeleteTask = async () => {
    if (task.id) {
      await deleteTask(task.id);

      navigate("/tasks")
      
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto ">
      <button
        onClick={() => navigate("/tasks")}
        className="flex items-center bg-white border border-gray-200 p-[2px] text-[10px] w-[80px] h-[30px] rounded-sm mb-4"
      >
        <img
          src={volver}
          alt="Volver"
          className="mr-4 w-[10px] h-auto object-contain"
        />
        <p>Volver</p>
      </button>
      <h2 className="text-2xl font-bold mb-4">{task.title}</h2>

      <p className="text-sm text-gray-500 mb-2">
        <strong>Descripción:</strong> {task.description}
      </p>

      <p className="text-sm text-gray-500 mb-2">
        <strong>Completada:</strong> {task.completed ? "Sí" : "No"}
      </p>

      <p className="text-sm text-gray-500 mb-2">
        <strong>Fecha de Creación:</strong> {new Date(task.createdAt).toLocaleDateString()}
      </p>

      <div className="flex justify-between items-center mt-4">
        <button onClick={handleEditTask} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Editar
        </button>
        <button onClick={handleDeleteTask} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default TaskItem;

