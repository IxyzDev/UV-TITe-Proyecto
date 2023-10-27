import { v4 as uuidv4 } from 'uuid';

import db from '../../models'; 

import { UbicacionInterfaceWSub } from '../../interfaces/types';

import * as verif from './ubicacion.verif';

const Ubicacion = db.Ubicacion; // Reemplaza "Ubicacion" con el nombre correcto de tu modelo

// Controlador para crear una nueva ubicación
export const postUbicacion = async (object: any): Promise<UbicacionInterfaceWSub> => {
  const newUbicacionEntry: UbicacionInterfaceWSub = {
    ubicacion_ID: uuidv4(),
    direccion: verif.parseDireccion(object.direccion),
    coordenadas: verif.parseCoordenadas(object.coordenadas),
    n_domicilio: verif.parseNDomicilio(object.n_domicilio),
    lugar: verif.parseLugar(object.lugar),
  }
  return newUbicacionEntry;
};

// Controlador para obtener todas las ubicaciones
export const getUbicaciones = async (): Promise<UbicacionInterfaceWSub[]> => {
  const ubicaciones = await Ubicacion.findAll();
  return ubicaciones;
};

// Controlador para obtener una ubicación por ID
export const getUbicacionById = async (object: any): Promise<void> => {
  const ubicacion = await Ubicacion.findByPk({where: {ubicacion_ID: object.ubicacion_ID}})
  if (!ubicacion) {
    throw new Error("Ubicación no encontrada");
  }
  return ubicacion;
};

// Controlador para actualizar una ubicación por ID
export const putUbicacion = async (ubicacion_ID: string, object:any): Promise<UbicacionInterfaceWSub> => {
  const ubicacion = await Ubicacion.findByPk(ubicacion_ID);
  if (!ubicacion) {
    throw new Error("Ubicación no encontrada");
  }

  const newUbicacionEntry: UbicacionInterfaceWSub = {
    ubicacion_ID: ubicacion_ID,
    direccion: verif.parseDireccion(object.direccion),
    coordenadas: verif.parseCoordenadas(object.coordenadas),
    n_domicilio: verif.parseNDomicilio(object.n_domicilio),
    lugar: verif.parseLugar(object.lugar),
  }

  await ubicacion.update(newUbicacionEntry);
  return newUbicacionEntry
};

// Controlador para eliminar una ubicación por ID
export const deleteUbicacion = async (object: any): Promise<void> => {
  const result = await Ubicacion.destroy({where: {ubicacion_ID: object.ubicacion_ID}});
  if (!result) {
    throw new Error("Ubicación no encontrada");
  }
};
