import React from "react";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Main from "../../pages/Tasks/Tasks";

 const Layout: React.FC<any> = ({ children }) => (

  <div className="h-screen">


    <div className="flex flex-1 bg-gray-700">
      <div className="hidden md:block ">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col bg-white" >
        <Header />
        {children}
        
    <div className="block md:hidden">
      <Navbar />
    </div>
      </div>
    </div>
  
  </div>
);

export default Layout;