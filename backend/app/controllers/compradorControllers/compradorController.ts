import db from '../../models'
import {  CompradorInterface } from '../../interfaces/types'
import * as v from "./verifComprador"

const Comprador = db.Comprador

export const getComprador = async (): Promise< CompradorInterface[]> => {
    const compradores = await Comprador.findAll({ where: {} })
    return compradores
}
  
export const postComprador = (object: any):  CompradorInterface => {
    const newEntry:  CompradorInterface = {
      idComprador: 0,
      nombreComprador: v.parseNombreComprador(object.nombreComprador),
  }
  
    return newEntry
  }

export const deleteComprador = async (id: number): Promise<void> => {
  try {
    const comprador = await Comprador.findByPk(id);
    
    if (!comprador) {
      throw new Error('El comprador con el ID especificado no existe');
    }
    
    await comprador.destroy();
  } catch (error: any) {
    throw new Error('Error al eliminar al comprador: ' + error.message);
  }
};

export const updateComprador = async (idComprador: number, nuevoNombreComprador: string): Promise<void> => {
  try {
    const comprador = await Comprador.findByPk(idComprador);

    if (!comprador) {
      throw new Error('El tipo de producto con el ID especificado no existe');
    }

    const nombreComprador = v.parseNombreComprador(nuevoNombreComprador);

    await comprador.update({ nombreComprador });
  } catch (error: any) {
    throw new Error('Error al actualizar el tipo de producto: ' + error.message);
  }
};
