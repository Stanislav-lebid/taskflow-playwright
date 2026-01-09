import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth';
import tasksRoutes from './routes/tasks';
import testRoutes from './routes/test';

const app = express();
const PORT = 3001;

/**
 * ===== Global middleware =====
 */
app.use(cors());
app.use(express.json());

/**
 * ===== Health check =====
 * Для CI / Playwright / швидкої перевірки
 */
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

/**
 * ===== API routes =====
 */
app.use('/auth', authRoutes);
app.use('/tasks', tasksRoutes);

/**
 * ===== Test-only routes =====
 * ❗ НЕ для продакшену
 * Використовується ТІЛЬКИ в e2e
 */
app.use('/test', testRoutes);

/**
 * ===== 404 handler =====
 */
app.use((_req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

/**
 * ===== Server start =====
 */
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
