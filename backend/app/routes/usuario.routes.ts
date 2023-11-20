import express, { Request, Response } from "express";
import * as usuarioControllers from "../controllers/usuario_controllers/usuario.controller";

const router = express.Router();

// Mostrar todos los usuario
router.get("/get", async (_req: Request, res: Response) => {
  try {
    return res.json(await usuarioControllers.getUsuarios());
  } catch (error: any) {
    return res.status(500).json({ msg: "Error al mostrar los usuario: " + error.message });
  }
});

// Crear un usuario
router.post("/post", async (req: Request, res: Response) => {
  try {
    await usuarioControllers.postUsuario({ ...req.body });
    return res.json({ msg: "Creacion exitosa de un usuario" });
  } catch (error: any) {
    return res.status(500).json({ msg: "Error al crear un usuario: " + error.message });
  }
});

// Actualizar un usuario
router.put("/put/:id", async (req: Request, res: Response) => {
  try {
    await usuarioControllers.putUsuario(req.params.id, req.body);
    return res.json({ msg: "usuario actualizado correctamente" });
  } catch (error: any) {
    return res.status(500).json({ msg: "Error al actualizar el usuario: " + error.message });
  }
});

// Eliminar un usuario
router.delete("/delete/:id", async (req: Request, res: Response) => {
  try {
    await usuarioControllers.deleteusuario(req.params.id);
    return res.json({ msg: "usuario eliminado correctamente" });
  } catch (error: any) {
    return res.status(500).json({ msg: "Error al eliminar el usuario: " + error.message });
  }
});

/*
################################################################################################
################################################################################################
################################################################################################
*/

// Verificar Usuario
router.post("/login", async (req: Request, res: Response) => {
  try {
    return res.json(await usuarioControllers.loginUsuario({ ...req.body }));
  } catch (error: any) {
    return res.status(500).json({ msg: "Error al mostrar los usuario: " + error.message });
  }
});

export default router;
