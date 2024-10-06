import { PrismaClient } from '@prisma/client';
import { scopes } from './app/data/applications.js';

const prisma = new PrismaClient();

const main = async () => {
    for (const scope of scopes) {
      const createdScope = await prisma.scope.create({
        data: {
          industry: scope.industry,
          image: scope.image,
          applications: {
            create: scope.applications,
          },
        },
      });
  
      console.log(`Created scope: ${createdScope.industry}`);
    }
  
    console.log("All scopes inserted successfully.");
  };
  
main()
.catch((e) => {
    console.error(e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
});