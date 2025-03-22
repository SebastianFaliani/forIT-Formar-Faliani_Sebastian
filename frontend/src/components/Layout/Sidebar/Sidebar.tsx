
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import home from "../../../assets/home.png";
import tasks from "../../../assets/tasks.png";
import login from "../../../assets/login.jpg";


const Sidebar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <aside className="bg-gray-700 h-screen  w-50 pt-3">
      <div className="h-20 flex ">
        <div className="w-[45px] p-2">
          <img src={login} alt="Perfil" className="mr-4 rounded-full" />
        </div>
        <div className="text-white text-[12px] p-2">
          <p>Faliani Sebastian</p>
          <p>Developer</p>
        </div>
      </div>
      <nav className="navbar">
        <ul className="text-white text-xs pl-2">
          <li className="pl-2">
          <Link
                className="flex"
                to="/"
                onClick={() => setActiveLink("/")}
              >
              <img src={home} alt="Home" className="mr-4" />
              Inicio
            </Link>
          </li>
          <li className="pt-4 pl-2">
          <Link
                className="flex"
                to="/tasks"
                onClick={() => setActiveLink("/tasks")}
              >
              <img src={tasks} alt="Tareas" className="mr-4" />
              Tareas
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
