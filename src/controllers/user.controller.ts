import { Request, Response } from "express";
import userService from "../services/user.service";

const getAllUsers = async (request: Request, response: Response) => {
  const result = await userService.getAllUsers();
  response.status(result.status).send(result.data);
};

const createUser = async (request: Request, response: Response) => {
  const result = await userService.createUser(request.body);
  response.status(result.status).send(result.data);
};

const patchUser = async (request: Request, response: Response) => {
  const result = await userService.patchUser(Number(request.params.id), request.body);
  response.status(result.status).send(result.data);
};

const deleteUser = async (request: Request, response: Response) => {
  const result = await userService.deleteUser(Number(request.params.id));
  response.status(result.status).send(result.data);
};

export { getAllUsers, createUser, patchUser, deleteUser };
