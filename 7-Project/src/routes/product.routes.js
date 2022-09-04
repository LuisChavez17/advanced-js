import { Router } from "express";
import { methods as DataRestController } from "./../controllers/product.controllers"

const APIroutes = Router();

/* A router that is used to create the routes for the API. */
APIroutes.get("/", DataRestController.getDataRest); // GET http://localhost:4000/api-restfull/Restaurant/
APIroutes.get("/meals", DataRestController.getMeals);
APIroutes.get("/meals/:id", DataRestController.getMealsbyId);
APIroutes.post("/meals", DataRestController.addNewMeal);
APIroutes.put("/meals/:id", DataRestController.updateMeal);
APIroutes.patch("/meals/:id", DataRestController.modifieMeal);

export default APIroutes;
