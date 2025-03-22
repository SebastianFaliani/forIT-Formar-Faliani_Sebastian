import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Tasks from "../pages/Tasks/Tasks";
import Home from "../pages/Home/Home";
import NewTask from "../pages/NewTask/NewTask";

const Routers = () => (
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/new-tasks" element={<NewTask />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Routers;
