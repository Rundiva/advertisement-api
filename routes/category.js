import { Router } from "express";
import { addCategory, getAllCategories, getOneCategory, updateCategory, deleteCategory } from "../controllers/category.js";
import { categoryImageUpload } from "../middlewares/uploads.js";
import { isAuthenticated } from "../middlewares/authenticator.js";

const categoryRouter = Router();

categoryRouter.post('/categories', isAuthenticated, categoryImageUpload.single('logo'), addCategory);

categoryRouter.get('/categories', getAllCategories);

categoryRouter.get('/categories/:id', getOneCategory);

categoryRouter.patch('/categories/:id', isAuthenticated, categoryImageUpload.single('logo'), updateCategory);

categoryRouter.delete('/categories/:id', isAuthenticated, deleteCategory);



export default categoryRouter;