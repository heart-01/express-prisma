import express, { Router } from "express";
import { gatAllUsers } from "../controllers/user.controller";

const userRouter: Router = express.Router();

userRouter.get("/", gatAllUsers);

export default userRouter;
