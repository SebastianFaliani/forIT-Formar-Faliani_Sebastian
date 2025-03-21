import React from "react";
import home from "../../../assets/home.png";
import tasks from "../../../assets/tasks.png";

const Sidebar = () => (
  <aside className="bg-gray-700 h-screen w-60">
    <div className="h-28">
    
    </div>
    <ul className="text-white">
      <li className="pt-4 pl-2">
        <a href="/" className="flex">
        <img src={home} alt="" className="mr-4" />
          Home
        </a>
      </li>
      <li className="pt-4 pl-2" >
        <a href="/" className="flex ">
        <img src={tasks} alt="" className="mr-4" />
          Tareas
        </a>
      </li>
    </ul>
  </aside>
);

export default Sidebar;