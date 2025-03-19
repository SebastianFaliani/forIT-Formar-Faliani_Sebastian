import sequelize from './database.js';

export const loadTasks = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Base de datos sincronizada correctamente');
  } catch (err) {
    console.error('Error al sincronizar la base de datos:', err);
  }
};


