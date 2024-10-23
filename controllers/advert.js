import { AdvertModel } from "../models/advert.js";
import { advertValidator, updateAdvertValidator } from "../validators/advert.js";

export const addAdvert = async (req, res, next) => {
    try {
        const { error, value } = advertValidator.validate({
            ...req.body,
            image: req.file?.filename
        });
        if (error) {
            return res.status(422).json(error);
        }
        await AdvertModel.create({
            ...value,
            user: req.auth.id
        });
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
            .skip(skip)
            .populate('category');
        res.status(200).json(adverts)
    } catch (error) {
        next(error);
    }
};

export const getAdvert = async (req, res, next) => {
    try {
        const { id } = req.params;
        const advert = await AdvertModel.findById(id).populate('category');
        res.json(advert)
    } catch (error) {
        next(error);
    }
};

export const updateAdvert = async (req, res, next) => {
    try {
        const { error, value } = updateAdvertValidator.validate({
            ...req.body,
            image: req.file?.filename
        });
        if (error) {
            return res.status(422).json(error);
        }
        const updateAdvert = await AdvertModel.findOneAndUpdate(
            {
                _id: req.params.id,
                user: req.auth.id
            },
            value,
            { new: true }
        );
        if (!updateAdvert) {
            res.status(404).json("Advert not found");
        }
            res.status(200).json(updateAdvert)
       


    } catch (error) {
        next(error)
    }
};

export const deleteAdvert = async (req, res, next) => {
    try {
        const deleteAdvert = await AdvertModel.findOneAndDelete(
            {
                _id: req.params.id,
                user: req.auth.id
            });

        if (!deleteAdvert) {
            return res.status(422).json("Advert not found")

        }
        res.status(200).json(deleteAdvert)
    } catch (error) {
        next(error);
    }
};
