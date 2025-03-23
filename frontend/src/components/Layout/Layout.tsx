import React from "react";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

const Layout: React.FC<any> = ({ children }) => (
  <div className="h-screen">
    <div className="flex flex-1 bg-[#1DBE98]">
      <div className="hidden md:block ">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col bg-white" >
        <Header />
        {children}
        <div className="block md:hidden fixed bottom-0 left-0 w-full z-50">
          <Navbar />
        </div>
      </div>
    </div>
  </div>
);

export default Layout;