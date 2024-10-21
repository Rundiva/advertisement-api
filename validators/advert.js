import Joi from "joi";

export const advertValidator = Joi.object ({
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    category: Joi.string().required(),
    price: Joi.number().required()
});

export const updateAdvertValidator = Joi.object ({
    title: Joi.string(),
    description: Joi.string(),
    image: Joi.string(),
    category: Joi.string(),
    price: Joi.string()
});