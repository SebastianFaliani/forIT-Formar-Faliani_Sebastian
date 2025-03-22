import React from "react";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Main from "../Tasks/Tasks";

 const Layout: React.FC<any> = ({ children }) => (

  <div >


    <div className="flex flex-1">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col h-screen" >
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