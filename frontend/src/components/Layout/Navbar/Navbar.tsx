import React from "react";
import home from "../../../assets/home.png";
import tasks from "../../../assets/tasks.png";

const Navbar = () => (
  <nav className="bg-gray-700 p-4">
    <ul className="text-white flex place-content-around " >
      <li className="">
        <a href="/">
          <img src={home} alt="" className="mr-4" />
        </a>
      </li>
      <li className="">
        <a href="/">
          <img src={tasks} alt="" className="mr-4" />

        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;