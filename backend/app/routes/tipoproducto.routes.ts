import express, { Request, Response } from 'express'
import * as tipoproductoController from "../controllers/tipoproductoControllers/tipoproductoController"
import db from '../models'

const router = express.Router()

router.get('/mostrar', async (_req: Request, res: Response) => {
  try {
    const tipoproductos = await tipoproductoController.getTipoproducto()
    return res.json(tipoproductos)
  } catch (error: any) {
    return res.json({ msg: 'Error al mostrar los tipos de los productos'+ error.message})
  }
})

router.post('/crear', async (req: Request, res: Response) => {
  try {
    const newTipoproductoEntry = tipoproductoController.postTipoproducto({ ...req.body })

    const record = db.Tipoproducto.create(newTipoproductoEntry)

    return res.json({record, msg: 'Subida de tipo exitosa' })
  } catch (error: any) {
    console.log(error)
    return res.json({ msg: 'Error al subir el nuevo tipo' + error.message})
  }
})

router.delete('/eliminar/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    await tipoproductoController.deleteTipoproducto(id);

    return res.json({ msg: 'Tipoproducto eliminado correctamente' });
  } catch (error: any) {
    console.log(error);
    return res.json({ msg: 'Error al eliminar el tipoproducto' + error.message});
  }
});

router.put('/actualizar/:idTipoProducto', async (req: Request, res: Response) => {
  try {
    const idTipoProducto = parseInt(req.params.idTipoProducto);
    const nuevaDescripcion = req.body.descripcionProducto;

    await tipoproductoController.updateTipoProducto(idTipoProducto, nuevaDescripcion);

    return res.json({ msg: 'Tipo de producto actualizado correctamente' });
  } catch (error: any) {
    return res.json({ msg: 'Error al actualizar el tipo de producto: ' + error.message });
  }
});


export default router