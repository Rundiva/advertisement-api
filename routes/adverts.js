import { Router } from "express";
import { addAdvert, deleteAdvert, getAdverts, getAdvert, updateAdvert } from "../controllers/adverts.js";
import { advertImageUpload } from "../middlewares/uploads.js";

// create routes
const advertRouter = Router();

// define routes
advertRouter.post("/adverts", advertImageUpload.single("image"), addAdvert);

advertRouter.get("/adverts", getAdverts);

advertRouter.get("/adverts/:id", getAdvert);

advertRouter.patch("/adverts", updateAdvert);

advertRouter.delete("/adverts", deleteAdvert);


// export router
export default advertRouter;