import express from 'express'
import carController from '../controllers/controlCars.js'

const customCarRouter = express.Router()
customCarRouter.get("/", carController.getCustomCars);
customCarRouter.get("/:id", carController.getCustomCar);
customCarRouter.post("/", carController.createCustomCar);
customCarRouter.patch("/:id", carController.patchCustomCar);
customCarRouter.delete("/:id", carController.deleteCustomCar);

export default customCarRouter;