import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import TaskList from "../pages/TaskList/TaskList";
import Home from "../pages/Home/Home";
import TaskForm from "../pages/TaskForm/TaskForm";
import TaskItem from "../pages/TaskItem/TaskItem";

const Routers = () => (
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/new-tasks" element={<TaskForm />} />
        <Route path="/detail" element={<TaskItem />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Routers;
