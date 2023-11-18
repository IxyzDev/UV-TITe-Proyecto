import express, { Request, Response } from "express";
import * as asignacionControllers from "../../controllers/crud/_asignacion_patrullero_reporte_controllers/asig.pat.rep.controllers";
import db from "../../models";

const router = express.Router();

// Mostrar todos los Asignacion
router.get("/get", async (_req: Request, res: Response) => {
  try {
    const Asignacion = await asignacionControllers.getAsignaciones();
    return res.json(Asignacion);
  } catch (error: any) {
    return res
      .status(500)
      .json({ msg: "Error al mostrar los Asignacion: " + error.message });
  }
});

// Crear un Asignacion
router.post("/post", async (req: Request, res: Response) => {
  try {
    const newAsignacionEntry = await asignacionControllers.postAsignacion({
      ...req.body,
    });

    const record =
      await db.AsignacionPatrulleroReporte.create(newAsignacionEntry);

    return res.json({ record, msg: "Creacion exitosa de un asignacion" });
  } catch (error: any) {
    console.log(error);
    return res
      .status(500)
      .json({ msg: "Error al crear un asignacion: " + error.message });
  }
});

// // Actualizar un Asignacion
// router.put('/put/:id', async (req: Request, res: Response) => {
//   try {
//     await asignacionControllers.putAsignacion(req.params.id, req.body);

//     return res.json({ msg: 'Asignacion actualizado correctamente' });
//   } catch (error: any) {
//     return res.status(500).json({ msg: 'Error al actualizar el Asignacion: ' + error.message });
//   }
// });

// Eliminar un Asignacion
router.delete("/delete/:id", async (req: Request, res: Response) => {
  try {
    await asignacionControllers.deleteAsignacion({
      asignacion_reporte_ID: req.params.id,
    });

    return res.json({ msg: "Asignacion eliminado correctamente" });
  } catch (error: any) {
    return res
      .status(500)
      .json({ msg: "Error al eliminar el Asignacion: " + error.message });
  }
});

export default router;
