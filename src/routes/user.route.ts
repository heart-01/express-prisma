import express, { Router } from "express";
import { getAllUsers, createUser, patchUser, deleteUser } from "../controllers/user.controller";

const userRouter: Router = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/", createUser);
userRouter.patch("/:id", patchUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
