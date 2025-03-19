import Task from '../models/Task.js';

export const getAllTasks = async () => {
    const tasks = await Task.findAll();
    if (tasks.length === 0) {
        return { message: 'No hay tareas disponibles', tasks: [] };
    }
    return { message: 'Lista de tareas obtenida correctamente', tasks };
};

export const getTaskById = async (id) => {
    const task = await Task.findByPk(id);
    if (!task) {
        throw new Error('Tarea no encontrada');
    }
    return { message: 'Tarea encontrada', task };
};

export const createTask = async (taskData) => {
    if (!taskData.title) {
        throw new Error('El título es obligatorio');
    }
    const newTask = await Task.create(taskData);
    return { message: 'Tarea creada con éxito', task: newTask };
};

export const updateTask = async (id, taskData) => {
    const [updated] = await Task.update(taskData, { where: { id } });
    if (!updated) {
        throw new Error('Tarea no encontrada o sin cambios');
    }
    const updatedTask = await Task.findByPk(id);
    return { message: 'Tarea actualizada con éxito', task: updatedTask };
};

export const deleteTask = async (id) => {
    const deleted = await Task.destroy({ where: { id } });
    if (!deleted) {
        throw new Error('Tarea no encontrada');
    }
    return { message: 'Tarea eliminada correctamente' };
};
