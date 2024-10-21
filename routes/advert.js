import { Router } from "express";
import { addAdvert, deleteAdvert, getAdverts, getAdvert, updateAdvert } from "../controllers/advert.js";

// create routes
const advertRouter = Router();

// define routes
advertRouter.post("/adverts", addAdvert);

advertRouter.get("/adverts", getAdverts);

advertRouter.get("/adverts/:id", getAdvert);

advertRouter.patch("/adverts", updateAdvert);

advertRouter.delete("/adverts", deleteAdvert);


// export router
export default advertRouter;