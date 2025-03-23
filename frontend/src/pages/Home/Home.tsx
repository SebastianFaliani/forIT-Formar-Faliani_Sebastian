import React, { useState, useEffect } from "react";
import { getTasks, Task } from "../../services/taskServices";
import TaskPieChart from "../../components/TaskChart/TaskChart";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import imageTask from "../../assets/taskBlack.png";
import imagePendiente from "../../assets/edit.png";
import imageTotal from "../../assets/total.png";
import { log } from "console";

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [selectedButton, setSelectedButton] = useState<string | null>("Todas");

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data.tasks);
      setFilteredTasks(data.tasks);
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    filterTasks(selectedButton);
  }, [selectedButton, tasks]);

  const filterTasks = (filter: string | null) => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()-1);
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    let filtered = tasks;

    if (filter === "Este mes") {
      filtered = tasks.filter(task => new Date(task.createdAt) >= startOfMonth);
    } else if (filter === "Esta semana") {
      filtered = tasks.filter(task => new Date(task.createdAt) >= startOfWeek);
    } else if (filter === "Día de hoy") {
      filtered = tasks.filter(task => {
        const taskDate = new Date(task.createdAt);
        return (
          taskDate.getDate() === today.getDate() &&
          taskDate.getMonth() === today.getMonth() &&
          taskDate.getFullYear() === today.getFullYear()
        );
      });
    }

    setFilteredTasks(filtered);
  };

  const totalTasks = filteredTasks.length;
  const completedTasks = filteredTasks.filter(task => task.completed).length;
  const incompleteTasks = totalTasks - completedTasks;

  return (
    <main className="h-full p-4 bg-[#DCF4EE]">
      <div className="pb-2">
        <h1 className="text-2xl font-semibold mb-4">Inicio</h1>
        <div className="flex flex-wrap">
          {["Todas", "Este mes", "Esta semana", "Día de hoy"].map(label => (
            <Button
              key={label}
              buttonLabel={label}
              isSelected={selectedButton === label}
              onClick={() => setSelectedButton(label)}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-around flex-wrap">
        <Card buttonLabel="Tareas totales" image={imageTotal} total={totalTasks} percentage={100} />
        <Card
          buttonLabel="Tareas completadas"
          image={imageTask}
          total={completedTasks}
          percentage={totalTasks ? (completedTasks * 100) / totalTasks : 0}
        />
        <Card
          buttonLabel="Tareas incompletas"
          image={imagePendiente}
          total={incompleteTasks}
          percentage={totalTasks ? (incompleteTasks * 100) / totalTasks : 0}
        />
      </div>

      <div className="flex justify-center">
        <TaskPieChart total={totalTasks} completed={completedTasks} incomplete={incompleteTasks} />
      </div>
    </main>
  );
};

export default Home;
