import joi from "joi";
import { NextFunction, Request, Response } from "express";
import { IValidateSchemaMiddleware } from "../interfaces/IValidateSchemaMiddleware";
import { JOI_OPTIONS } from "../enums/joi.enum";

const validateSchemaMiddleware = ({ option, schema }: IValidateSchemaMiddleware) => {
  return (request: Request, response: Response, next: NextFunction) => {
    try {
      const options: JOI_OPTIONS = request[option];
      const result = joi.attempt(options, schema);
      request[options] = result;
    } catch (error: unknown) {
      if (error instanceof joi.ValidationError) {
        const { message, context, path }: joi.ValidationErrorItem = error.details[0];
        return response.status(400).json({
          message,
          context,
          path,
        });
      }
      response.status(400).send("Invalid request params");
    }
    return next();
  };
};

export { validateSchemaMiddleware };
