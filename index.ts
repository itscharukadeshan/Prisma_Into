/** @format */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "jain doe",
  //       email: "jain@gmail.com",
  //     },
  //   });

  //   const users = await prisma.user.findMany({ include: { article: true } });

  //   const article = await prisma.article.create({
  //     data: {
  //       title: "second article",
  //       body: "body of the first author",
  //       author: {
  //         connect: {
  //           Id: 1,
  //         },
  //       },
  //     },
  //   });

  //   const articles = await prisma.article.findMany();

  //   const userWithArticle = await prisma.user.create({
  //     data: {
  //       name: "boy genius",
  //       email: "boy-genius@genius.com",
  //       article: {
  //         create: {
  //           title: "first show",
  //           body: "this is not our first show",
  //         },
  //       },
  //     },
  //   });

  //   users.forEach((user) => {
  //     console.log(`User =>`);
  //     console.log(`Name : ${user.name} , Email:${user.email}`);
  //     console.log("Articles =>");
  //     user.article.forEach((article) => {
  //       console.log(
  //         `Title:${article.title} , Body: ${article.body} , Id:${article.Id}`
  //       );
  //     });
  //   });

  //   const update = await prisma.user.update({
  //     where: { Id: 1 },
  //     data: { name: "jain Smith" },
  //   });

  //   const remove = await prisma.article.delete({
  //     where: { Id: 1 },
  //   });

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
});
