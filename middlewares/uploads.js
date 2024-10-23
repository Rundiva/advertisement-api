import multer from "multer";
import {multerSaveFilesOrg} from "multer-savefilesorg";


// export const localUpload = multer({dest: 'uploads/'});

export const advertImageUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/advert-api/adverts/*'

    }),
    preservePath: true
});

export const categoryImageUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/advert-api/categories/*'

    }),
    preservePath: true
});

export const userAvatarUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/advert-api/users/*' 

    }),
    preservePath: true
});