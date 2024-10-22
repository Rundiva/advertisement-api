import { AdvertModel } from "../models/advert.js";
import { advertValidator, updateAdvertValidator } from "../validators/adverts.js";

export const addAdvert = async (req, res, next) => {
    try {
        const { error, value } = advertValidator.validate({
            ...req.body,
            icon: req.file?.filename
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
        const { filter = "{}", sort = "{}", limit = 10, skip = 0 } = req.query;

        const adverts = await AdvertModel
            .find(JSON.parse(filter))
            .sort(JSON.parse(sort))
            .limit(limit)
            .skip(skip);

        res.status(200).json(adverts)
    } catch (error) {
        next(error);
    }
};

export const getAdvert = async (req, res, next) => {
    try {
        const { id } = req.params;
        const advert = await AdvertModel.findById(id);
        res.json(advert)
    } catch (error) {
        next(error);
    }
};

export const updateAdvert = async (req, res, next) => {
    try {
        const { error, value } = updateAdvertValidator.validate({
            ...req.body,
            icon: req.file?.filename
        });
        if (error) {
            return res.status(200).json(error);
        }

        const updateadvert = await AdvertModel.findByIdAndUpdate(req.params.id, value, { new: true });
        res.status(200).json(updateadvert);

    } catch (error) {
        next(error)
    }
};

export const deleteAdvert = async (req, res, next) => {
    try {
        await AdvertModel.findByIdAndDelete(req.params.id);
        res.json("Advert deleted successfully")
    } catch (error) {
        next(error);
    }
};
