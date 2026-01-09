import { Router } from 'express';
import { TasksController } from '../controllers/tasks.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.get('/', authMiddleware, TasksController.getTasks);
router.post('/', authMiddleware, TasksController.createTask);

export default router;
