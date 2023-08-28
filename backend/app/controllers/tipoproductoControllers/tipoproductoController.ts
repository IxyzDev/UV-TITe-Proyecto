import db from '../../models';
import { TipoproductoInterface } from '../../interfaces/types';
import * as v from "./verifTipoproducto";

const Tipoproducto = db.Tipoproducto;

export const getTipoproducto = async (): Promise<TipoproductoInterface[]> => {
  const tipoproductos = await Tipoproducto.findAll({ where: {} });
  return tipoproductos;
}

export const postTipoproducto = (object: any): TipoproductoInterface  => {
  const newEntry: TipoproductoInterface = {
    idTipoProducto: 0,
    descripcionProducto: v.parseDescripcionProducto(object.descripcionProducto),
  }
  return newEntry
}

export const deleteTipoproducto = async (id: number): Promise<void> => {
  try {
    const tipoProducto = await Tipoproducto.findByPk(id);
    
    if (!tipoProducto) {
      throw new Error('El tipoProducto con el ID especificado no existe');
    }
    
    await tipoProducto.destroy();
  } catch (error: any) {
    throw new Error('Error al eliminar al tipoProducto: ' + error.message);
  }
};

export const updateTipoProducto = async (idTipoProducto: number, nuevaDescripcion: string): Promise<void> => {
  try {
    const tipoProducto = await Tipoproducto.findByPk(idTipoProducto);

    if (!tipoProducto) {
      throw new Error('El tipo de producto con el ID especificado no existe');
    }

    const descripcionProducto = v.parseDescripcionProducto(nuevaDescripcion);

    await tipoProducto.update({ descripcionProducto });
  } catch (error: any) {
    throw new Error('Error al actualizar el tipo de producto: ' + error.message);
  }
};

