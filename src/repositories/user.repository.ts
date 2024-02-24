import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const gatAllUsers = async () => {
  return await prisma.user.findMany();
};

export default { gatAllUsers };
