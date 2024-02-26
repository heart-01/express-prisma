import { PrismaClient } from "@prisma/client";
import { IUser } from "../models/user.model";

const prisma = new PrismaClient();

const getAllUsers = async (): Promise<IUser[]> => {
  return (await prisma.user.findMany()) as IUser[];
};

const createUser = async (user: IUser): Promise<IUser> => {
  return (await prisma.user.create({ data: user })) as IUser;
};

const patchUser = async (id: number, user: IUser): Promise<IUser> => {
  return (await prisma.user.update({ where: { id }, data: user })) as IUser;
};

const deleteUser = async (id: number): Promise<IUser> => {
  return (await prisma.user.delete({ where: { id } })) as IUser;
};

export default { getAllUsers, createUser, patchUser, deleteUser };
