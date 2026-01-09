import { Router } from 'express';
import { prisma } from '../db';

const router = Router();

router.post('/reset', async (_req, res) => {
  // порядок важливий
  await prisma.task.deleteMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      email: 'test@test.com',
      password: '123456',
      tasks: {
        create: [
          { title: 'Learn Playwright' },
          { title: 'Write e2e tests' }
        ]
      }
    }
  });

  res.json({ status: 'ok', userId: user.id });
});

export default router;
