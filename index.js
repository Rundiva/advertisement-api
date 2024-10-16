import express from "express";
import advertRouter from "./routes/adverts.js";



// create an express app

const app = express();

// connect to database



// use middlewares
app.use(express.json());

// use routes
app.use(advertRouter);

// listen to incoming request
app.listen(3005, ()=>{
    console.log("App is listening on port 3005");
});