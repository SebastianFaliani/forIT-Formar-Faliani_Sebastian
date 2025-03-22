import { Task } from "../services/taskServices";

export const validateTaskForm = (title: string, description: string): Task => {
  const errors: Task = {};

  if (!title.trim()) {
    errors.title = "El título es obligatorio.";
  } else if (title.length < 3) {
    errors.title = "El título debe tener al menos 3 caracteres.";
  }

  if (!description.trim()) {
    errors.description = "La descripción es obligatoria.";
  } else if (description.length < 5) {
    errors.description = "La descripción debe tener al menos 5 caracteres.";
  }

  return errors;
};
