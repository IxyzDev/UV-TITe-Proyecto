import express, { Request, Response } from "express";
import * as operadorControllers from "../controllers/crud/operadores_controllers/operador.controllers";
import db from "../models";

const router = express.Router();

// Mostrar todos los Operador
router.get("/get", async (_req: Request, res: Response) => {
  try {
    const Operador = await operadorControllers.getOperadores();
    return res.json(Operador);
  } catch (error: any) {
    return res
      .status(500)
      .json({ msg: "Error al mostrar los Operador: " + error.message });
  }
});

// Crear un Operador
router.post("/post", async (req: Request, res: Response) => {
  try {
    const newOperadorEntry = await operadorControllers.postOperador({
      ...req.body,
    });

    console.log(newOperadorEntry);

    const record = await db.Operadores.create(newOperadorEntry);

    return res.json({ record, msg: "Creacion exitosa de un operador" });
  } catch (error: any) {
    console.log(error);
    return res
      .status(500)
      .json({ msg: "Error al crear un operador: " + error.message });
  }
});

// // Actualizar un Operador
// router.put('/put/:id', async (req: Request, res: Response) => {
//   try {
//     await operadorControllers.updateOperador(req.params.id, req.body);

//     return res.json({ msg: 'Operador actualizado correctamente' });
//   } catch (error: any) {
//     return res.status(500).json({ msg: 'Error al actualizar el Operador: ' + error.message });
//   }
// });

// Eliminar un Operador
router.delete("/delete/:id", async (req: Request, res: Response) => {
  try {
    await operadorControllers.deleteOperador({ operador_ID: req.params.id });

    return res.json({ msg: "Operador eliminado correctamente" });
  } catch (error: any) {
    return res
      .status(500)
      .json({ msg: "Error al eliminar el Operador: " + error.message });
  }
});

export default router;
