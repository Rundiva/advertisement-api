import multer from "multer";
import {multerSaveFilesOrg} from "multer-savefilesorg";


export const localUpload = multer({dest: 'uploads/'});

export const advertIconUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/advertisement-api/adverts/*'

    }),
    preservePath: true
});

export const userAvatarUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/advertisement-api/users/*' 

    }),
    preservePath: true
});