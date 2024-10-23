import { Router } from "express";
import { addAdvert, deleteAdvert, getAdverts, getAdvert, updateAdvert } from "../controllers/advert.js";
import { isAuthenticated } from "../middlewares/authenticator.js";
import { advertImageUpload } from "../middlewares/uploads.js";

// create routes
const advertRouter = Router();

// define routes
advertRouter.post("/adverts", advertImageUpload.single("image"), addAdvert);

advertRouter.get("/adverts", getAdverts);

advertRouter.get("/adverts/:id", getAdvert);
advertRouter.patch("/adverts/:id", isAuthenticated, advertImageUpload.single("image"), updateAdvert);

advertRouter.delete("/adverts/:id", deleteAdvert);

// export router
export default advertRouter;