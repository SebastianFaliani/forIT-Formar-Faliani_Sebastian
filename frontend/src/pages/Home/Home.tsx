import React, { useState, useEffect } from "react";
import { getTasks, Task } from "../../services/taskServices";
import TaskPieChart from "../../components/TaskChart/TaskChart";

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data.tasks);
    };
    fetchTasks();
  }, []);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const incompleteTasks = totalTasks - completedTasks;

  return (
    <div className="flex justify-center mt-6">
      <TaskPieChart 
        total={totalTasks} 
        completed={completedTasks} 
        incomplete={incompleteTasks} 
      />
    </div>
  );
};

export default Home;
