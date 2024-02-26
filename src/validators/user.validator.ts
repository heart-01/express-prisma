import joi from "joi";

const createUser: joi.ObjectSchema = joi.object().keys({
  email: joi.string().email().required(),
  firstName: joi.string().min(3).required(),
  lastName: joi.string().min(3).required(),
  social: joi.object({
    facebook: joi.string().uri(),
    twitter: joi.string().uri(),
    github: joi.string().uri(),
    website: joi.string().uri(),
  }),
});

const patchUserParams: joi.ObjectSchema = joi.object().keys({
  id: joi.string().required(),
});

const patchUserBody: joi.ObjectSchema = joi.object().keys({
  email: joi.string().email(),
  firstName: joi.string().min(3),
  lastName: joi.string().min(3),
  social: joi.object({
    facebook: joi.string().uri(),
    twitter: joi.string().uri(),
    github: joi.string().uri(),
    website: joi.string().uri(),
  }),
});

const deleteUserParams: joi.ObjectSchema = joi.object().keys({
  id: joi.string().required(),
});

export default { createUser, patchUserParams, patchUserBody, deleteUserParams };
