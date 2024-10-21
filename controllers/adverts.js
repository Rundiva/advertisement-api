export const addAdverts = (req, res, next) => {
    try {
res.json("Advert posted successfully")
    } catch (error) {
        next(error);
    }
};

export const getAdverts = (req, res, next) => {
    try {
res.json("View all adverts")
    } catch (error) {
        next(error);
    }
};

export const getOneAdvert = (req, res, next) => {
    try {
res.json("View advert")
    } catch (error) {
        next(error);
    }
};

export const updateAdverts = (req, res, next) => {
    try {
res.json("Advert updated successfully")
    } catch (error) {
        next(error);
    }
};

export const deleteAdverts = (req, res, next) => {
    try {
res.json("Advert deleted successfully")
    } catch (error) {
        next(error);
    }
};
