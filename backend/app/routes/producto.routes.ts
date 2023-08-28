import express, { Request, Response } from 'express'
import * as productoController from '../controllers/productoControllers/productoController';
import db from '../models'

const router = express.Router()

router.get('/mostrar', async (_req: Request, res: Response) => {
  try {
    const productos = await productoController.getProductos()
    return res.json(productos)
  } catch (error: any) {
    return res.json({ msg: 'Error al mostrar los productos' + error.message})
  }
})


router.post('/crear', async (req: Request, res: Response) => {
  try {
    const newProductosEntry = await productoController.postProducto({ ...req.body }); // Agregar await aquí

    const record = await db.Producto.create(newProductosEntry); // Agregar await aquí

    return res.json({ record, msg: 'Producto subido correctamente' });
  } catch (error: any) {
    console.log(error);
    return res.json({ msg: 'Error al subir un producto' + error.message});
  }
});

router.delete('/eliminar/:numeroVendedor/:idComprador/:idTipoProducto', async (req: Request, res: Response) => {
  try {
    const numeroVendedor = parseInt(req.params.numeroVendedor);
    const idComprador = parseInt(req.params.idComprador);
    const idTipoProducto = parseInt(req.params.idTipoProducto);

    await productoController.deleteProducto(numeroVendedor, idComprador, idTipoProducto);

    return res.json({ msg: 'Producto eliminado correctamente' });
  } catch (error: any) {
    return res.json({ msg: 'Error al eliminar el producto: ' + error.message });
  }
});

router.put('/actualizar/:numeroVendedor/:idComprador/:idTipoProducto', async (req: Request, res: Response) => {
  try {
    const numeroVendedor = parseInt(req.params.numeroVendedor);
    const idComprador = parseInt(req.params.idComprador);
    const idTipoProducto = parseInt(req.params.idTipoProducto);
    const nuevoPrecioCompra = req.body.precioCompra;

    await productoController.updateProducto(numeroVendedor, idComprador, idTipoProducto, nuevoPrecioCompra);

    return res.json({ msg: 'Precio de la compra actualizado correctamente' });
  } catch (error: any) {
    return res.json({ msg: 'Error al actualizar el precio de la compra: ' + error.message });
  }
});

router.get('/consulta/:idComprador/:idTipoProducto', async (req: Request, res: Response) => {
  try {
    const idComprador = parseInt(req.params.idComprador);
    const idTipoProducto = parseInt(req.params.idTipoProducto);

    console.log(idComprador, idTipoProducto)

    const productos = await productoController.getProductosDeCompradorPorTipo(idComprador, idTipoProducto)
    return res.json(productos)
  } catch (error: any) {
    return res.json({ msg: 'Error al mostrar la consulta' + error.message})
  }
})

export default router