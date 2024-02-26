import { IUserResponse } from "@/interfaces/IUserResponse";
import { IUser } from "../models/user.model";
import userRepository from "../repositories/user.repository";

const getAllUsers = async (): Promise<IUserResponse<IUser[] | Error>> => {
  try {
    const result: IUser[] = await userRepository.getAllUsers();
    return {
      status: 200,
      data: result,
    };
  } catch (error: unknown) {
    return {
      status: 500,
      data: error as Error,
    };
  }
};

const createUser = async (user: IUser): Promise<IUserResponse<IUser | Error>> => {
  try {
    const result: IUser = await userRepository.createUser(user);
    return {
      status: 201,
      data: result,
    };
  } catch (error: unknown) {
    return {
      status: 500,
      data: error as Error,
    };
  }
};

const patchUser = async (id: number, user: IUser): Promise<IUserResponse<IUser | Error>> => {
  try {
    const result: IUser = await userRepository.patchUser(id, user);
    return {
      status: 200,
      data: result,
    };
  } catch (error: unknown) {
    return {
      status: 500,
      data: error as Error,
    };
  }
};

const deleteUser = async (id: number): Promise<IUserResponse<IUser | Error>> => {
  try {
    const result: IUser = await userRepository.deleteUser(id);
    return {
      status: 200,
      data: result,
    };
  } catch (error: unknown) {
    return {
      status: 500,
      data: error as Error,
    };
  }
};

export default { getAllUsers, createUser, patchUser, deleteUser };
