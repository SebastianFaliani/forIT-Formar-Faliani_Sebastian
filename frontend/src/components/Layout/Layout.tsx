import React from "react";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";

const Layout = () => (
  <div >


    <div className="flex flex-1">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col h-screen" >
        <Header />
        <Main />
    <div className="block md:hidden">
      <Navbar />
    </div>
      </div>
    </div>
  
  </div>
);

export default Layout;