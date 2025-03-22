import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import volver from "../../assets/volver.png";
import { createTask, Task, updateTask } from "../../services/taskServices";

const NewTask: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isCreate, task } = location.state || {}
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<Task>({});


  useEffect(() => {
    if (!isCreate) {
      setTitle(task.title)
      setDescription(task.description)
    }
  }, [])


  const validateForm = () => {
    const newErrors: Task = {};
    if (!title.trim()) {
      newErrors.title = "El título es obligatorio.";
    } else if (title.length < 3) {
      newErrors.title = "El título debe tener al menos 3 caracteres.";
    }

    if (!description.trim()) {
      newErrors.description = "La descripción es obligatoria.";
    } else if (description.length < 5) {
      newErrors.description = "La descripción debe tener al menos 5 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveTask = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (isCreate) {
      const newTask = { title, description, completed: false };
      await createTask(newTask);
    }else{
      const newTask = { title, description };
      await updateTask(task.id, newTask);

    }

    navigate("/tasks");
  };

  const handleCancelTask = () => {
    setTitle("");
    setDescription("");
    setErrors({});
  };

  return (
    <main className="h-full p-4 bg-gray-100/80">
      <div className="pb-2">
        <h1 className="text-2xl font-semibold mb-4">Tareas</h1>
      </div>
      <div className="overflow-x-auto bg-white">
        <div className="flex justify-between p-2">
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/tasks")}
              className="flex items-center bg-white border border-gray-200 p-[2px] text-[10px] w-[80px] h-[30px] rounded-sm"
            >
              <img
                src={volver}
                alt="Volver"
                className="mr-4 w-[10px] h-auto object-contain"
              />
              <p>Volver</p>
            </button>
            <h1 className="text-lg font-semibold mb-4">Datos de la tarea</h1>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleCancelTask}
              className="bg-white border border-gray-200 p-[2px] text-[10px] w-[150px] h-[30px] rounded-sm"
            >
              Cancelar
            </button>
            <button
              onClick={handleSaveTask}
              className="bg-[#0061FA] text-white p-[2px] text-[10px] w-[150px] h-[30px] rounded-sm"
            >
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 bg-white p-4 rounded-md shadow-md">
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-semibold mb-2">
              Título
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full px-3 py-2 border ${errors.title ? "border-red-500" : "border-gray-300"} rounded-md`}
              placeholder="Ingresa el título de la tarea"
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-semibold mb-2">
              Descripción
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={`w-full px-3 py-2 border ${errors.description ? "border-red-500" : "border-gray-300"} rounded-md`}
              placeholder="Ingresa una descripción"
            />
            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
          </div>
        </form>
      </div>
    </main>
  );
};

export default NewTask;
