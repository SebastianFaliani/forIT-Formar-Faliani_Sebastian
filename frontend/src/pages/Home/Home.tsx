import React, { useState, useEffect } from "react";
import { getTasks, Task } from "../../services/taskServices";
import TaskPieChart from "../../components/TaskChart/TaskChart";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import imageTask from "../../assets/taskBlack.png";
import imagePendiente from "../../assets/edit.png";
import imageTotal from "../../assets/total.png";

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data.tasks);
    };
    fetchTasks();
    setSelectedButton("Todas");
  }, []);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const incompleteTasks = totalTasks - completedTasks;

  const handleButtonClick = (buttonLabel: string) => {
    setSelectedButton(buttonLabel);
  };

  return (
    <main className="h-full p-4 bg-gray-100">
      <div className="pb-2">
        <h1 className="text-2xl font-semibold mb-4">Inicio</h1>
        <div className="flex">
          <Button
            buttonLabel="Todas"
            isSelected={selectedButton === "Todas"}
            onClick={() => handleButtonClick("Todas")}
          />
          <Button
            buttonLabel="Este mes"
            isSelected={selectedButton === "Completadas"}
            onClick={() => handleButtonClick("Completadas")}
          />
          <Button
            buttonLabel="Esta semana"
            isSelected={selectedButton === "Incompletas"}
            onClick={() => handleButtonClick("Incompletas")}
          />
          <Button
            buttonLabel="Día de hoy"
            isSelected={selectedButton === "Día de hoy"}
            onClick={() => handleButtonClick("Día de hoy")}
          />
        </div>
      </div>
      <div className="flex justify-around">

        <Card
          buttonLabel={"Tareas totales"}
          image={imageTotal}
          total={totalTasks}
          percentage={100}
        />
        <Card
          buttonLabel={"Tareas completada"}
          image={imageTask}
          total={completedTasks}
          percentage={completedTasks*100/totalTasks}
        />
        <Card
          buttonLabel={"Tareas incompletas"}
          image={imagePendiente}
          total={incompleteTasks}
          percentage={incompleteTasks*100/totalTasks}
        />
      </div >
      <div className="flex justify-center">
        <TaskPieChart
          total={totalTasks}
          completed={completedTasks}
          incomplete={incompleteTasks}
        />

      </div>
    </main>
  );
};

export default Home;
