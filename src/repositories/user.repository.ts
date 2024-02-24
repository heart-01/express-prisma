import { PrismaClient } from "@prisma/client";
import { IUser } from "../models/user.model";

const prisma = new PrismaClient();

const getAllUsers = async () => {
  return await prisma.user.findMany();
};

const createUser = async (user: IUser) => {
  return await prisma.user.create({ data: user });
};

const patchUser = async (id: number, user: IUser) => {
  return await prisma.user.update({ where: { id }, data: user });
};

const deleteUser = async (id: number) => {
  return await prisma.user.delete({ where: { id } });
};

export default { getAllUsers, createUser, patchUser, deleteUser };
