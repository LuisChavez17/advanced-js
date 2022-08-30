import { Router } from "express";
import { methods as MealsController } from "./../controllers/product.controllers"

const APIroutes = Router();

/* A router that is used to create the routes for the API. */
APIroutes.get("/", MealsController.getMeals); 


export default APIroutes;
