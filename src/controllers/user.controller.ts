import { Request, Response } from "express";
import userService from "../services/user.service";
import { IUser } from "../models/user.model";
import { IUserResponse } from "@/interfaces/IUserResponse";

const getAllUsers = async (request: Request, response: Response): Promise<void> => {
  const result: IUserResponse<IUser[] | Error> = await userService.getAllUsers();
  response.status(result.status).send(result.data);
};

const createUser = async (request: Request, response: Response): Promise<void> => {
  const userInput: IUser = request.body;
  const result: IUserResponse<IUser | Error> = await userService.createUser(userInput);
  response.status(result.status).send(result.data);
};

const patchUser = async (request: Request, response: Response): Promise<void> => {
  const result: IUserResponse<IUser | Error> = await userService.patchUser(Number(request.params.id), request.body);
  response.status(result.status).send(result.data);
};

const deleteUser = async (request: Request, response: Response): Promise<void> => {
  const result: IUserResponse<IUser | Error> = await userService.deleteUser(Number(request.params.id));
  response.status(result.status).send(result.data);
};

export { getAllUsers, createUser, patchUser, deleteUser };
