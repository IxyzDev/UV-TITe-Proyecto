import express, { Request, Response } from "express";
//import * as movilControllers from "../../controllers/crud/movil_controllers/movil.controllers";
//eimport db from "../../models";

const router = express.Router();

// Mostrar todos los Movils
router.get("/get", async (req: Request, _res: Response) => {
  console.log(req.body);
});

export default router;
