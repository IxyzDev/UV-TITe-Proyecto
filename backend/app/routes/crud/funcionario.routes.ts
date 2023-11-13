import express, { Request, Response } from "express";
import * as funcionarioController from "../../controllers/crud/funcionarios_controllers/funcionarios.controller";
import db from "../../models";

const router = express.Router();

// Mostrar todos los funcionarios
router.get("/get", async (_req: Request, res: Response) => {
  try {
    const funcionarios = await funcionarioController.readFuncionarios();
    return res.json(funcionarios);
  } catch (error: any) {
    return res
      .status(500)
      .json({ msg: "Error al mostrar los funcionarios: " + error.message });
  }
});

// Crear un funcionario
router.post("/post", async (req: Request, res: Response) => {
  try {
    const newFuncionarioEntry = await funcionarioController.createFuncionario({
      ...req.body,
    });

    const record = await db.Funcionarios.create(newFuncionarioEntry);

    return res.json({ record, msg: "Creación de funcionario exitosa" });
  } catch (error: any) {
    console.log(error);
    return res
      .status(500)
      .json({ msg: "Error al crear un funcionario: " + error.message });
  }
});

// Actualizar un funcionario
router.put("/put/:id", async (req: Request, res: Response) => {
  try {
    await funcionarioController.updateFuncionario({
      ...req.body,
      funcionario_ID: req.params.id,
    });

    return res.json({ msg: "Funcionario actualizado correctamente" });
  } catch (error: any) {
    return res
      .status(500)
      .json({ msg: "Error al actualizar el funcionario: " + error.message });
  }
});

// Eliminar un funcionario
router.delete("/delete/:id", async (req: Request, res: Response) => {
  try {
    await funcionarioController.deleteFuncionario({
      funcionario_ID: req.params.id,
    });

    return res.json({ msg: "Funciionario Eliminado correctamente" });
  } catch (error: any) {
    return res
      .status(500)
      .json({ msg: "Error al eliminar el funcionario: " + error.message });
  }
});

export default router;
