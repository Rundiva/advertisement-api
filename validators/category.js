import Joi from "joi";

    export const categoryValidationSchema = Joi.object({
        brand: Joi.string().required(),
        bio: Joi.string().required(),
        logo: Joi.string()
    
    });

    export const updateCategoryValidationSchema = Joi.object({
        brand: Joi.string(),
        bio: Joi.string(),
        logo: Joi.string()
    });