import { Request, Response } from "express";
import userService from "../services/user.service";

const gatAllUsers = async (request: Request, response: Response) => {
  const result = await userService.gatAllUsers();
  response.status(result.status).send(result.data);
};

export { gatAllUsers };
