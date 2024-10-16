import { Router } from "express";
import { addAdverts, deleteAdverts, getAdverts, getOneAdvert, updateAdverts } from "../controllers/adverts.js";

// create routes
const advertRouter = Router();

// define routes
advertRouter.post("/adverts", addAdverts);

advertRouter.get("/adverts", getAdverts);

advertRouter.get("/adverts/:id", getOneAdvert);

advertRouter.patch("/adverts", updateAdverts);

advertRouter.delete("/adverts", deleteAdverts);


// export router
export default advertRouter;