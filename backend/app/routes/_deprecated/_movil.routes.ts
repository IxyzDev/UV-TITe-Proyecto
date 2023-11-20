import express, { Request, Response } from "express";
import * as movilControllers from "../../controllers/crud/_movil_controllers/movil.controllers";
import db from "../../models";

const router = express.Router();

// Mostrar todos los Movils
router.get("/get", async (_req: Request, res: Response) => {
  try {
    const Movils = await movilControllers.getMovil();
    return res.json(Movils);
  } catch (error: any) {
    return res
      .status(500)
      .json({ msg: "Error al mostrar los Movils: " + error.message });
  }
});

// Crear un Movil
router.post("/post", async (req: Request, res: Response) => {
  try {
    const newMovilEntry = await movilControllers.createMovil({ ...req.body });

    const record = await db.Movil.create(newMovilEntry);

    return res.json({ record, msg: "Creacion exitosa de un movil" });
  } catch (error: any) {
    console.log(error);
    return res
      .status(500)
      .json({ msg: "Error al crear un movil: " + error.message });
  }
});

// Actualizar un Movil
router.put("/put/:id", async (req: Request, res: Response) => {
  try {
    await movilControllers.updateMovil(req.params.id, req.body);

    return res.json({ msg: "Movil actualizado correctamente" });
  } catch (error: any) {
    return res
      .status(500)
      .json({ msg: "Error al actualizar el Movil: " + error.message });
  }
});

// Eliminar un Movil
router.delete("/delete/:id", async (req: Request, res: Response) => {
  try {
    await movilControllers.deleteMovil({ movil_ID: req.params.id });

    return res.json({ msg: "Movil eliminado correctamente" });
  } catch (error: any) {
    return res
      .status(500)
      .json({ msg: "Error al eliminar el Movil: " + error.message });
  }
});

export default router;
