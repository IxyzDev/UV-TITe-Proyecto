import express, { Request, Response } from 'express'
import * as vendedorController from '../controllers/vendedorControllers/vendedorController';
import db from "../models"

const router = express.Router()

router.get('/mostrar', async (_req: Request, res: Response) => {
  try {
    const vendedores = await vendedorController.getVendedor()
    return res.json(vendedores)
  } catch (error: any) {
    return res.json({ msg: 'Error al mostrar los vendedores' + error.message})
  }
})

router.post('/crear', async (req: Request, res: Response) => {
  try {

    const newVendedorEntry = vendedorController.postVendedor({ ...req.body })

    const record = db.Vendedor.create(newVendedorEntry)

    return res.json({record, msg: 'Subida de vendedor exitosa' })
  } catch (error: any) {
    console.log(error)
    return res.json({ msg: 'Error al subir un vendedor'+ error.message })
  }
})

router.delete('/eliminar/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    
    await vendedorController.deleteVendedor(id);
    
    return res.json({ msg: 'VendeleteVendedor eliminado correctamente' });
  } catch (error: any) {
    return res.json({ msg: 'Error al eliminar al Vendedor'+ error.message});
  }
});

router.put('/actualizar/:numeroVendedor', async (req: Request, res: Response) => {
  try {
    const numeroVendedor = parseInt(req.params.numeroVendedor);
    const nuevoNombreVendedor = req.body.nombreVendedor;

    await vendedorController.updateVendedor(numeroVendedor, nuevoNombreVendedor);

    return res.json({ msg: 'Nombre del vendedor actualizado correctamente' });
  } catch (error: any) {
    return res.json({ msg: 'Error al actualizar el nombre del vendedor: ' + error.message });
  }
});

export default router