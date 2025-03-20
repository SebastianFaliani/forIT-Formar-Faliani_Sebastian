import express from 'express';
import * as taskController from '../controllers/taskController.js';
import taskValidator from '../validations/taskValidator.js';

const router = express.Router();

router.get('/', taskController.getAllTasks);
router.get('/:id', taskController.getTaskById);
router.post('/', taskValidator,taskController.createTask);
router.put('/:id', taskValidator,taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

export default router;
