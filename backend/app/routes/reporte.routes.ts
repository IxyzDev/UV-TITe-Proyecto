import express, { Request, Response } from "express";
import * as reporteControllers from "../controllers/reportes_controllers/reporte.controllers";
import db from "../models";

const router = express.Router();

// Mostrar todos los Reportes
router.get("/get", async (_req: Request, res: Response) => {
  try {
    const Reportes = await reporteControllers.getReportes();
    return res.json(Reportes);
  } catch (error: any) {
    return res.status(500).json({ msg: "Error al mostrar los Reportes: " + error.message });
  }
});

// Crear un Reporte
router.post("/post", async (req: Request, res: Response) => {
  try {
    const newReporteEntry = await reporteControllers.postReporte({
      ...req.body,
    });

    console.log(newReporteEntry);

    const record = await db.Reportes.create(newReporteEntry);

    return res.json({ record, msg: "Creacion exitosa de un reporte" });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({ msg: "Error al crear un reporte: " + error.message });
  }
});

// Actualizar un Reporte
router.put("/put/:id", async (req: Request, res: Response) => {
  try {
    await reporteControllers.putReporte(req.params.id, req.body);

    return res.json({ msg: "Reporte actualizado correctamente" });
  } catch (error: any) {
    return res.status(500).json({ msg: "Error al actualizar el Reporte: " + error.message });
  }
});

// Eliminar un Reporte
router.delete("/delete/:id", async (req: Request, res: Response) => {
  try {
    await reporteControllers.deleteReporte({ reporte_ID: req.params.id });

    return res.json({ msg: "Reporte eliminado correctamente" });
  } catch (error: any) {
    return res.status(500).json({ msg: "Error al eliminar el Reporte: " + error.message });
  }
});

export default router;
