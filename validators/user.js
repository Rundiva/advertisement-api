import Joi from "joi";

export const registerUserValidator = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    repeat_password: Joi.ref('password').required(),
    role: Joi.string().valid('user', 'vendor', 'admin')
});

export const logInUserValidator = Joi.object({
    name: Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});


export const updateUserValidator = Joi.object({
    name: Joi.string(),
    avatar: Joi.string(),
    password: Joi.string(), 
});