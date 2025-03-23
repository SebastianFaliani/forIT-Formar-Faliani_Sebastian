import Task from '../models/Task.js'; 

const tasks = [
  { title: 'Comprar comestibles', description: 'Comprar frutas, verduras y leche en el supermercado.', completed: false },
  { title: 'Llamar al dentista', description: 'Agendar una cita para limpieza dental.', completed: false },
  { title: 'Enviar correo al jefe', description: 'Enviar informe semanal de avances en el proyecto.', completed: true },
  { title: 'Hacer ejercicio', description: 'Realizar una rutina de 30 minutos de cardio.', completed: false },
  { title: 'Leer un libro', description: 'Avanzar al menos 50 páginas del libro actual.', completed: true },
  { title: 'Pagar facturas', description: 'Pagar la factura de electricidad y agua.', completed: false },
  { title: 'Organizar escritorio', description: 'Limpiar y ordenar el escritorio de trabajo.', completed: false },
  { title: 'Preparar la cena', description: 'Cocinar una comida saludable para la familia.', completed: true },
  { title: 'Comprar ropa nueva', description: 'Comprar ropa para la temporada de invierno.', completed: false },
  { title: 'Lavar el coche', description: 'Lavar el coche por dentro y por fuera.', completed: true },
  { title: 'Estudiar para el examen', description: 'Estudiar los temas para el examen final de matemáticas.', completed: false },
  { title: 'Limpiar la casa', description: 'Limpiar las habitaciones y los baños.', completed: true },
  { title: 'Preparar presentación', description: 'Preparar una presentación para la reunión del jueves.', completed: false },
  { title: 'Revisar correos electrónicos', description: 'Revisar y responder correos electrónicos importantes.', completed: true },
  { title: 'Comprar entradas al cine', description: 'Comprar entradas para la película de esta semana.', completed: false },
  { title: 'Organizar fiesta de cumpleaños', description: 'Planificar los detalles de la fiesta de cumpleaños de Juan.', completed: false },
  { title: 'Ir al gimnasio', description: 'Asistir al gimnasio para realizar rutina de fuerza.', completed: true },
  { title: 'Escribir artículo', description: 'Escribir un artículo sobre desarrollo web.', completed: false },
  { title: 'Pasear al perro', description: 'Sacar al perro a pasear por el parque.', completed: true },
  { title: 'Hacer compras en línea', description: 'Realizar compras de tecnología y artículos para el hogar.', completed: false },
  { title: 'Limpiar la nevera', description: 'Eliminar alimentos viejos y organizar los estantes de la nevera.', completed: false },
  { title: 'Llamar a los padres', description: 'Llamar para saber cómo están y ponernos al día.', completed: true },
  { title: 'Ver serie de TV', description: 'Ver el próximo episodio de mi serie favorita.', completed: false },
  { title: 'Arreglar el grifo', description: 'Reparar el grifo que gotea en el baño.', completed: true },
  { title: 'Hacer la compra de supermercado', description: 'Comprar todo lo necesario para la semana.', completed: false },
  { title: 'Lavar ropa', description: 'Lavar, secar y doblar la ropa.', completed: false },
  { title: 'Cortar el césped', description: 'Cortar el césped del jardín y limpiar el área.', completed: true },
  { title: 'Leer artículos de noticias', description: 'Leer los titulares y noticias del día.', completed: false },
  { title: 'Poner cita con el médico', description: 'Agendar una cita con el médico para chequeo anual.', completed: false },
  { title: 'Reparar la puerta', description: 'Arreglar la puerta del baño que no cierra bien.', completed: true },
  { title: 'Investigar un tema', description: 'Investigar sobre el impacto del cambio climático.', completed: false },
  { title: 'Limpiar ventanas', description: 'Limpiar las ventanas de la casa para que entren más luz.', completed: true },
  { title: 'Realizar llamada de trabajo', description: 'Hacer una llamada importante para coordinar proyecto.', completed: false },
  { title: 'Actualizar software', description: 'Asegurarse de que todo el software esté actualizado.', completed: true },
  { title: 'Poner la mesa', description: 'Preparar la mesa para la cena con la familia.', completed: false },
  { title: 'Comprar plantas para el jardín', description: 'Comprar plantas para el jardín trasero.', completed: false },
  { title: 'Investigar restaurantes nuevos', description: 'Buscar y revisar restaurantes nuevos en la ciudad.', completed: true },
  { title: 'Llamar a la abuela', description: 'Llamar a la abuela para saber cómo está.', completed: false },
  { title: 'Ver tutorial', description: 'Ver tutorial sobre cómo mejorar mi técnica de fotografía.', completed: true },
  { title: 'Poner música', description: 'Poner música relajante para descansar un poco.', completed: false },
  { title: 'Actualizar CV', description: 'Actualizar mi currículum con mis últimas experiencias.', completed: false },
  { title: 'Revisar documentos', description: 'Revisar los documentos legales para el contrato de la casa.', completed: true },
  { title: 'Recoger paquete', description: 'Ir a la oficina de correos a recoger un paquete importante.', completed: false },
  { title: 'Cuidar a los niños', description: 'Cuidar a los niños mientras sus padres salen de viaje.', completed: true },
  { title: 'Pintar la habitación', description: 'Pintar las paredes de la habitación de color blanco.', completed: false },
  { title: 'Cambiar las sábanas', description: 'Cambiar las sábanas de la cama y ponerlas a lavar.', completed: true },
  { title: 'Jugar al ajedrez', description: 'Jugar una partida de ajedrez con un amigo.', completed: false },
  { title: 'Recoger las hojas del jardín', description: 'Recoger las hojas caídas del jardín durante el otoño.', completed: true },
  { title: 'Escuchar un podcast', description: 'Escuchar un podcast sobre desarrollo personal.', completed: false },
  { title: 'Reparar el teléfono', description: 'Arreglar el teléfono móvil que dejó de funcionar.', completed: true },
  { title: 'Ir a la biblioteca', description: 'Ir a la biblioteca a estudiar y hacer investigación.', completed: false },
  { title: 'Hacer la declaración de impuestos', description: 'Realizar la declaración de impuestos anual.', completed: false },
  { title: 'Paseo en bicicleta', description: 'Salir a pasear en bicicleta por el parque.', completed: true },
  { title: 'Ver película en casa', description: 'Ver una película de acción en la comodidad de mi hogar.', completed: false },
  { title: 'Revisar presupuesto mensual', description: 'Revisar mis finanzas y ajustar el presupuesto mensual.', completed: false },
  { title: 'Arreglar el ordenador', description: 'Arreglar el ordenador que no arranca correctamente.', completed: true },
  { title: 'Limpiar el baño', description: 'Limpiar el baño y asegurarse de que esté desinfectado.', completed: false },
  { title: 'Hacer reservaciones de hotel', description: 'Realizar la reserva de un hotel para las vacaciones.', completed: false },
  { title: 'Ver partido de fútbol', description: 'Ver el próximo partido de fútbol con amigos.', completed: true }
];


export const insertTasks = async () => {
  try {
    await Task.bulkCreate(tasks, { validate: true });
    console.log('Tareas pre-cargadas correctamente en la base de datos.');
  } catch (error) {
    console.error('Error al insertar tareas:', error);
  }
};

