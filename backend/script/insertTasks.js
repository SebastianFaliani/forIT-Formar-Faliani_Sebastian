import Task from '../models/Task.js'; 

const tasks = [
  {
    title: 'Comprar comestibles',
    description: 'Comprar frutas, verduras y leche en el supermercado.',
    completed: false,
  },
  {
    title: 'Llamar al dentista',
    description: 'Agendar una cita para limpieza dental.',
    completed: false,
  },
  {
    title: 'Enviar correo al jefe',
    description: 'Enviar informe semanal de avances en el proyecto.',
    completed: true,
  },
  {
    title: 'Hacer ejercicio',
    description: 'Realizar una rutina de 30 minutos de cardio.',
    completed: false,
  },
  {
    title: 'Leer un libro',
    description: 'Avanzar al menos 50 páginas del libro actual.',
    completed: true,
  },
  {
    title: 'Pagar facturas',
    description: 'Pagar la factura de electricidad y agua.',
    completed: false,
  },
  {
    title: 'Organizar escritorio',
    description: 'Limpiar y ordenar el escritorio de trabajo.',
    completed: false,
  },
  {
    title: 'Preparar la cena',
    description: 'Cocinar una comida saludable para la familia.',
    completed: true,
  },
];

export const insertTasks = async () => {
  try {
    await Task.bulkCreate(tasks, { validate: true });
    console.log('Tareas pre-cargadas correctamente en la base de datos.');
  } catch (error) {
    console.error('Error al insertar tareas:', error);
  }
};

