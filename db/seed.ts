import { PrismaClient, Prisma } from '@prisma/client';
import { customersData, opportunitiesData } from './mockData';

const prisma = new PrismaClient();


export async function seeding(prisma: PrismaClient) {
  console.log(`Start seeding ...`);
  for (const e of customersData) {
    const customer = await prisma.customer.create({
      data: e,
    });
    console.log(`Created user with id: ${customer.id}`);
  }

  for (const e of opportunitiesData) {
    const customer = await prisma.opportunity.create({
      data: e,
    });
    console.log(`Created opportunity with id: ${customer.id}`);
  }

  console.log(`Seeding finished.`);
}

seeding(prisma)
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
