import CONFIG from "./baseURL/config";


const BASE_URL = `${CONFIG.BASE_URL}/api/tasks`;

export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

const getTasks = async (): Promise<Task[]> => {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error("Error al obtener las tareas");
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

const getTaskById = async (id: number): Promise<Task | null> => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`);
        if (!response.ok) throw new Error("Error al obtener la tarea");
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

const createTask = async (task: Task): Promise<Task | null> => {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });
        if (!response.ok) throw new Error("Error al crear la tarea");
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};


const updateTask = async (id: number, task: Task): Promise<Task | null> => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task),
        });
        if (!response.ok) throw new Error("Error al actualizar la tarea");
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

const deleteTask = async (id: number) : Promise<boolean>=> {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) throw new Error("Error al eliminar la tarea");
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};

export {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};
