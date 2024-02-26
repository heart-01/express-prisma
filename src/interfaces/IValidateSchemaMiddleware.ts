import joi from "joi";
import { JOI_OPTIONS } from "./../enums/joi.enum";

export interface IValidateSchemaMiddleware {
  option: JOI_OPTIONS;
  schema: joi.ObjectSchema;
}
