import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'test@test.com',
      password: '123456',
      tasks: {
        create: [
          { title: 'Learn Playwright' },
          { title: 'Write e2e tests' },
          { title: 'Ship product' }
        ]
      }
    }
  });

  console.log('Seeded user:', user.email);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
