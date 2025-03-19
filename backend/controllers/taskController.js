import * as taskService from '../services/taskService.js';

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las tareas', error: error.message });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const task = await taskService.getTaskById(req.params.id);
    res.json(task);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const newTask = await taskService.createTask(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la tarea', error: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const updatedTask = await taskService.updateTask(req.params.id,  req.body);
    res.json(updatedTask);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const response = await taskService.deleteTask(req.params.id);
    res.json(response);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
