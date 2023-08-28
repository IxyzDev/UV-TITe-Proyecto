import db from '../../models'
import { ProductInterface } from '../../interfaces/types'
import * as v from "./verifProducto"

const Producto = db.Producto

export const getProductos = async (): Promise<ProductInterface[]> => {
  const productos = await Producto.findAll({ where: {}})
  return productos
}

export const postProducto = async (object: any): Promise<ProductInterface> => {
  try {
    const newEntry: ProductInterface = {
      numeroVendedor: await v.parseNumeroVendedor(object.numeroVendedor),
      idComprador: await v.parseIdComprador(object.idComprador),
      idTipoProducto: await v.parseIdTipoProducto(object.idTipoProducto),
      precioCompra: await v.parsePrecioCompra(object.precioCompra),
    };

    return newEntry;
  } catch (error: any) {
    // Manejo de errores
    throw new Error('Error al crear el producto: ' + error.message);
  }
};

export const deleteProducto = async (numeroVendedor: number, idComprador: number, idTipoProducto: number): Promise<void> => {
  try {
    const producto = await Producto.findOne({ where: { numeroVendedor, idComprador, idTipoProducto } });

    if (!producto) {
      throw new Error('El producto con las columnas especificadas no existe');
    }

    await producto.destroy();
  } catch (error: any) {
    throw new Error('Error al eliminar el producto: ' + error.message);
  }
};

export const updateProducto = async (numeroVendedor: number, idComprador: number, idTipoProducto: number, nuevoPrecioCompra: string): Promise<void> => {
  try {
    const producto = await Producto.findOne({ where: { numeroVendedor, idComprador, idTipoProducto } });

    if (!producto) {
      throw new Error('El precio de la compra con el ID especificado no existe');
    }

    const precioCompra = v.parsePrecioCompra(nuevoPrecioCompra);

    await producto.update({ precioCompra });
  } catch (error: any) {
    throw new Error('Error al actualizar el precio de la compra: ' + error.message);
  }
};

export const getProductosDeCompradorPorTipo = async (idComprador: number, idTipoProducto: number): Promise<ProductInterface[]> => {

  const productos = await Producto.findAll({ 
    where: { 
      idComprador: idComprador, 
      idTipoProducto: idTipoProducto 
    }})
  return productos;
}

