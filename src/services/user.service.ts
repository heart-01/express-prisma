import { IUser } from "../models/user.model";
import userRepository from "../repositories/user.repository";

const getAllUsers = async () => {
  try {
    const result = await userRepository.getAllUsers();
    return {
      status: 200,
      data: result,
    };
  } catch (error) {
    return {
      status: 500,
      data: "error",
    };
  }
};

const createUser = async (user: IUser) => {
  try {
    const result = await userRepository.createUser(user);
    return {
      status: 201,
      data: result,
    };
  } catch (error) {
    return {
      status: 500,
      data: "error",
    };
  }
};

const patchUser = async (id: number, user: IUser) => {
  try {
    const result = await userRepository.patchUser(id, user);
    return {
      status: 200,
      data: result,
    };
  } catch (error) {
    return {
      status: 500,
      data: "error",
    };
  }
};

const deleteUser = async (id: number) => {
  try {
    const result = await userRepository.deleteUser(id);
    return {
      status: 200,
      data: result,
    };
  } catch (error) {
    return {
      status: 500,
      data: "error",
    };
  }
};

export default { getAllUsers, createUser, patchUser, deleteUser };
