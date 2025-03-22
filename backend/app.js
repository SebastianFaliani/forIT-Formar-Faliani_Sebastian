import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import taskRoutes from './routers/taskRoutes.js';
import { loadTasks } from './config/config.js';
import error from './middlewares/errorMiddleware.js';


const app = express();
const PORT = process.env.PORT || 3000;

const initializeServer = async () => {
  await loadTasks(); 
  
  
  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use('/api/tasks', taskRoutes);

  app.use(error.e404);

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
};

initializeServer();
