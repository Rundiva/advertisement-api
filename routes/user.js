import { Router } from "express";
import { getProfile, getUserAdverts, logInUser, logOutUser, registerUser, updateProfile } from "../controllers/user.js";
import { hasPermission, isAuthenticated } from "../middlewares/authenticator.js";
import { userAvatarUpload } from "../middlewares/uploads.js";

const userRouter = Router();

userRouter.post('/users/register', registerUser);

userRouter.post('/users/login', logInUser);

userRouter.get('/users/me', isAuthenticated, hasPermission('get_profile'), getProfile);

userRouter.post('/users/logout', isAuthenticated, logOutUser);

userRouter.get('/users/me/adverts', isAuthenticated, getUserAdverts);

userRouter.patch('/users/me', isAuthenticated, hasPermission('update_profile'), userAvatarUpload.single('avatar'), updateProfile)

export default userRouter;