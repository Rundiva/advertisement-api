import { AdvertModel } from "../models/advert.js";
import { advertValidator, updateAdvertValidator } from "../validators/advert.js";

export const addAdvert = async (req, res, next) => {
    try {
        const { error, value } = advertValidator.validate({
            ...req.body,
            icon:req.file?.filename
        });
        if (error) {
            return res.status(422).json(error);
        }
        await AdvertModel.create(value);
        res.status(201).json("Advert posted successfully!")
    } catch (error) {
        next(error);
    }
};

export const getAdverts = async (req, res, next) => {
    try {
        const { filter = "{}", limit = 10, skip = 0} = req.query;
    const { error, value } =  updateAdvertValidator.validate(req.body);

    const adverts = await AdvertModel
    .find(JSON.parse(filter))
    .limit(limit)
    .skip(skip);

        res.json(advert)
    } catch (error) {
        next(error);
    }
};


export const getAdvert = (req, res, next) => {
    try {
    res.json(advert)
        } catch (error) {
            next(error);
        }
    };

export const updateAdvert = (req, res, next) => {
    try {
res.json("Advert updated successfully")
    } catch (error) {
        next(error);
    }
};

export const deleteAdvert = (req, res, next) => {
    try {
res.json("Advert deleted successfully")
    } catch (error) {
        next(error);
    }
};
