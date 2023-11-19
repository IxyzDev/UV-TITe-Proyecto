import express, { Request, Response } from "express";
import * as patrulleroControllers from "../../controllers/crud/_patrulleros_controllers/patrullero.controllers";
import db from "../../models";

const router = express.Router();

// Mostrar todos los Patrullero
router.get("/get", async (_req: Request, res: Response) => {
  try {
    const Patrullero = await patrulleroControllers.getPatrulleros();
    return res.json(Patrullero);
  } catch (error: any) {
    return res
      .status(500)
      .json({ msg: "Error al mostrar los Patrullero: " + error.message });
  }
});

// Crear un Patrullero
router.post("/post", async (req: Request, res: Response) => {
  try {
    const newPatrulleroEntry = await patrulleroControllers.postPatrullero({
      ...req.body,
    });

    console.log(newPatrulleroEntry);

    const record = await db.Patrulleros.create(newPatrulleroEntry);

    return res.json({ record, msg: "Creacion exitosa de un patrullero" });
  } catch (error: any) {
    console.log(error);
    return res
      .status(500)
      .json({ msg: "Error al crear un patrullero: " + error.message });
  }
});

// // Actualizar un Patrullero
// router.put('/put/:id', async (req: Request, res: Response) => {
//   try {
//     await patrulleroControllers.updatePatrullero(req.params.id, req.body);

//     return res.json({ msg: 'Patrullero actualizado correctamente' });
//   } catch (error: any) {
//     return res.status(500).json({ msg: 'Error al actualizar el Patrullero: ' + error.message });
//   }
// });

// Eliminar un Patrullero
router.delete("/delete/:id", async (req: Request, res: Response) => {
  try {
    await patrulleroControllers.deletePatrullero({
      patrullero_ID: req.params.id,
    });

    return res.json({ msg: "Patrullero eliminado correctamente" });
  } catch (error: any) {
    return res
      .status(500)
      .json({ msg: "Error al eliminar el Patrullero: " + error.message });
  }
});

export default router;
