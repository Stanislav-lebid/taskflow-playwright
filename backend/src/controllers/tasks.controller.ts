import { Request, Response } from 'express';
import { TasksService } from '../services/tasks.service';

export class TasksController {
  static async getTasks(req: Request, res: Response) {
    const userId = (req as any).userId;

    const tasks = await TasksService.getTasks(userId);
    res.json(tasks);
  }

  static async createTask(req: Request, res: Response) {
    const userId = (req as any).userId;
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: 'Title required' });
    }

    const task = await TasksService.createTask(userId, title);
    res.status(201).json(task);
  }
}
