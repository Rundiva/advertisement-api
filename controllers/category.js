import { CategoryModel } from "../models/category.js";
import { categoryValidationSchema, updateCategoryValidationSchema } from "../validators/category.js";

export const addCategory = async (req, res, next) => {

    try {
        const { error, value } = categoryValidationSchema.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        await CategoryModel.create(value);
        res.status(201).json('Category added successfully');
    } catch (error) {

        next(error);

    }

}

export const getAllCategories = async (req, res, next) => {
    try {
        const categories = await CategoryModel.find();
        res.status(200).json(categories);
    } catch (error) {

        next(error);

    }
}

export const getOneCategory = async (req, res, next) => {
    try {
        const categories = await CategoryModel.findById(req.params.id);
        res.status(200).json(categories);
    } catch (error) {
        next(error)
    }
}


export const updateCategory = async (req, res, next) => {
    try {
        const { error, value } = updateCategoryValidationSchema.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        await CategoryModel.findByIdAndUpdate(req.params.id)
        res.status(200).json('Category updated Successfully!');
    } catch (error) {
        next(error)
    }
}



export const deleteCategory = async (req, res, next) => {

    try {
        await CategoryModel.findByIdAndDelete(req.params.id)
        res.status(200).json('Category deleted Successfully!');

    } catch (error) {
        next(error)

    }

}
