import express from "express";
import advertRouter from "./routes/adverts.js";
import userRouter from "./routes/user.js";
import mongoose from "mongoose";
import cors from "cors"

// connect to database
await mongoose.connect(process.env.MONGO_URI);

// create an express app
const app = express();

// use middlewares
app.use(cors());
app.use(express.json());

// use routes
app.use(advertRouter);
app.use(userRouter);

// listen to incoming request
app.listen(3005, ()=>{
    console.log("App is listening on port 3005");
});