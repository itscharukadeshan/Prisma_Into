/** @format */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "jain doe",
      email: "jain@gmail.com",
    },
  });

  console.log(user);

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
});
