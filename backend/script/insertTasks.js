import Task from '../models/Task.js'; 

const tasks = [
  {title: "Comprar comestibles", description: "Comprar frutas, verduras y leche en el supermercado.", completed: false, createdAt: "2025-03-01"},
  {title: "Llamar al dentista", description: "Agendar una cita para limpieza dental.", completed: false, createdAt: "2025-02-22"},
  {title: "Enviar correo al jefe", description: "Enviar informe semanal de avances en el proyecto.", completed: true, createdAt: "2025-01-30"},
  {title: "Hacer ejercicio", description: "Realizar una rutina de 30 minutos de cardio.", completed: false, createdAt: "2025-01-03"},
  {title: "Leer un libro", description: "Avanzar al menos 50 páginas del libro actual.", completed: true, createdAt: "2025-02-08"},
  {title: "Pagar facturas", description: "Pagar la factura de electricidad y agua.", completed: false, createdAt: "2025-03-09"},
  {title: "Organizar escritorio", description: "Limpiar y ordenar el escritorio de trabajo.", completed: false, createdAt: "2025-03-20"},
  {title: "Preparar la cena", description: "Cocinar una comida saludable para la familia.", completed: true, createdAt: "2025-03-06"},
  {title: "Comprar ropa nueva", description: "Comprar ropa para la temporada de invierno.", completed: false, createdAt: "2025-03-05"},
  {title: "Lavar el coche", description: "Lavar el coche por dentro y por fuera.", completed: true, createdAt: "2025-01-23"},
  {title: "Estudiar para el examen", description: "Estudiar los temas para el examen final de matemáticas.", completed: false, createdAt: "2025-02-07"},
  {title: "Limpiar la casa", description: "Limpiar las habitaciones y los baños.", completed: true, createdAt: "2025-01-28"},
  {title: "Preparar presentación", description: "Preparar una presentación para la reunión del jueves.", completed: false, createdAt: "2025-02-21"},
  {title: "Revisar correos electrónicos", description: "Revisar y responder correos electrónicos importantes.", completed: true, createdAt: "2025-02-02"},
  {title: "Comprar entradas al cine", description: "Comprar entradas para la película de esta semana.", completed: false, createdAt: "2025-03-22"},
  {title: "Organizar fiesta de cumpleaños", description: "Planificar los detalles de la fiesta de cumpleaños de Juan.", completed: false, createdAt: "2025-03-13"},
  {title: "Ir al gimnasio", description: "Asistir al gimnasio para realizar rutina de fuerza.", completed: true, createdAt: "2025-03-03"},
  {title: "Escribir artículo", description: "Escribir un artículo sobre desarrollo web.", completed: false, createdAt: "2025-01-16"},
  {title: "Pasear al perro", description: "Sacar al perro a pasear por el parque.", completed: true, createdAt: "2025-01-02"},
  {title: "Hacer compras en línea", description: "Realizar compras de tecnología y artículos para el hogar.", completed: false, createdAt: "2025-02-13"},
  {title: "Limpiar la nevera", description: "Eliminar alimentos viejos y organizar los estantes de la nevera.", completed: false, createdAt: "2025-03-07"},
  {title: "Llamar a los padres", description: "Llamar para saber cómo están y ponernos al día.", completed: true, createdAt: "2025-02-10"},
  {title: "Ver serie de TV", description: "Ver el próximo episodio de mi serie favorita.", completed: false, createdAt: "2025-01-31"},
  {title: "Arreglar el grifo", description: "Reparar el grifo que gotea en el baño.", completed: true, createdAt: "2025-02-02"},
  {title: "Hacer la compra de supermercado", description: "Comprar todo lo necesario para la semana.", completed: false, createdAt: "2025-01-26"},
  {title: "Lavar ropa", description: "Lavar, secar y doblar la ropa.", completed: false, createdAt: "2025-01-28"},
  {title: "Cortar el césped", description: "Cortar el césped del jardín y limpiar el área.", completed: true, createdAt: "2025-01-01"},
  {title: "Leer artículos de noticias", description: "Leer los titulares y noticias del día.", completed: false, createdAt: "2025-01-17"},
  {title: "Poner cita con el médico", description: "Agendar una cita con el médico para chequeo anual.", completed: false, createdAt: "2025-01-08"},
  {title: "Reparar la puerta", description: "Arreglar la puerta del baño que no cierra bien.", completed: true, createdAt: "2025-01-20"},
  {title: "Investigar un tema", description: "Investigar sobre el impacto del cambio climático.", completed: false, createdAt: "2025-02-04"},
  {title: "Limpiar ventanas", description: "Limpiar las ventanas de la casa para que entren más luz.", completed: true, createdAt: "2025-02-22"},
  {title: "Realizar llamada de trabajo", description: "Hacer una llamada importante para coordinar proyecto.", completed: false, createdAt: "2025-03-17"},
  {title: "Actualizar software", description: "Asegurarse de que todo el software esté actualizado.", completed: true, createdAt: "2025-03-13"},
  {title: "Poner la mesa", description: "Preparar la mesa para la cena con la familia.", completed: false, createdAt: "2025-02-17"},
  {title: "Comprar plantas para el jardín", description: "Comprar plantas para el jardín trasero.", completed: false, createdAt: "2025-02-03"},
  {title: "Investigar restaurantes nuevos", description: "Buscar y revisar restaurantes nuevos en la ciudad.", completed: true, createdAt: "2025-02-09"},
  {title: "Llamar a la abuela", description: "Llamar a la abuela para saber cómo está.", completed: false, createdAt: "2025-01-15"}
];

export const insertTasks = async () => {
  try {
    await Task.bulkCreate(tasks, { validate: true });
    console.log('Tareas pre-cargadas correctamente en la base de datos.');
  } catch (error) {
    console.error('Error al insertar tareas:', error);
  }
};

