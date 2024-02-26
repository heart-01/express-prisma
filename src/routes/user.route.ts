import express, { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validation";
import { JOI_OPTIONS } from "../enums/joi.enum";
import userValidator from "../validators/user.validator";
import { getAllUsers, createUser, patchUser, deleteUser } from "../controllers/user.controller";

const userRouter: Router = express.Router();

userRouter.get("/", getAllUsers);

userRouter.post(
  "/",
  validateSchemaMiddleware({
    option: JOI_OPTIONS.BODY,
    schema: userValidator.createUser,
  }),
  createUser
);

userRouter.patch(
  "/:id",
  validateSchemaMiddleware({
    option: JOI_OPTIONS.PARAMS,
    schema: userValidator.patchUserParams,
  }),
  validateSchemaMiddleware({
    option: JOI_OPTIONS.BODY,
    schema: userValidator.patchUserBody,
  }),
  patchUser
);

userRouter.delete(
  "/:id",
  validateSchemaMiddleware({
    option: JOI_OPTIONS.PARAMS,
    schema: userValidator.deleteUserParams,
  }),
  deleteUser
);

export default userRouter;
