import { prisma } from '../db';

export class TasksService {
  static async getTasks(userId: number) {
    return prisma.task.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });
  }

  static async createTask(userId: number, title: string) {
    return prisma.task.create({
      data: {
        title,
        userId
      }
    });
  }
}
