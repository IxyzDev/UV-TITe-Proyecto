import express, { Request, Response } from "express";
import * as comunicacionControllers from "../controllers/comunicaciones_controllers/comunicacion.controllers";

const router = express.Router();

// Mostrar todos los Comunicacions
router.get("/get", async (_req: Request, res: Response) => {
  try {
    const Comunicacions = await comunicacionControllers.getComunicacion();
    return res.json(Comunicacions);
  } catch (error: any) {
    return res.status(500).json({ msg: "Error al mostrar los Comunicacions: " + error.message });
  }
});

// Mostrar todos los Comunicacions
router.get("/get/:id", async (req: Request, res: Response) => {
  try {
    const Comunicacions = await comunicacionControllers.getComunicacionById(req.params.id);
    return res.json(Comunicacions);
  } catch (error: any) {
    return res.status(500).json({ msg: "Error al mostrar los Comunicacions: " + error.message });
  }
});

// Crear un Comunicacion
router.post("/post", async (req: Request, res: Response) => {
  try {
    await comunicacionControllers.postComunicacion({ ...req.body });

    return res.json({ msg: "Creacion exitosa de un movil" });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({ msg: "Error al crear un movil: " + error.message });
  }
});

// Actualizar un Comunicacion
router.put("/put/:id", async (req: Request, res: Response) => {
  try {
    await comunicacionControllers.updateComunicacion(req.params.id, req.body);

    return res.json({ msg: "Comunicacion actualizado correctamente" });
  } catch (error: any) {
    return res.status(500).json({ msg: "Error al actualizar el Comunicacion: " + error.message });
  }
});

// Eliminar un Comunicacion
router.delete("/delete/:id", async (req: Request, res: Response) => {
  try {
    await comunicacionControllers.deleteComunicacion({
      movil_ID: req.params.id,
    });

    return res.json({ msg: "Comunicacion eliminado correctamente" });
  } catch (error: any) {
    return res.status(500).json({ msg: "Error al eliminar el Comunicacion: " + error.message });
  }
});

export default router;
