import { v4 as uuidv4 } from 'uuid';

import db from '../../models'; 

import { AsignacionPatrulleroReporteInterface } from '../../interfaces/types';

import * as verif from './asig.pat.rep.verif';

const Asignacion = db.AsignacionPatrulleroReporte; 

// Controlador para crear una nueva asignacion
export const postAsignacion = async (object: any): Promise<AsignacionPatrulleroReporteInterface> => {
  const newAsignacionEntry: AsignacionPatrulleroReporteInterface = {
    asignacion_reporte_ID: uuidv4(),
    patrullero_ID: await verif.isPatrullero(object.patrullero_ID),
    reporte_ID: await verif.isReporte(object.reporte_ID),
  }
  return newAsignacionEntry;
};

// Controlador para obtener todas las asignaciones
export const getAsignaciones = async (): Promise<AsignacionPatrulleroReporteInterface[]> => {
  const asignaciones = await Asignacion.findAll();
  return asignaciones;
};

// Controlador para obtener una asignacion por ID
export const getAsignacionById = async (object: any): Promise<void> => {
  const asignacion = await Asignacion.findByPk({where: {asignacion_ID: object.asignacion_ID}})
  if (!asignacion) {
    throw new Error("Asignacion no encontrada");
  }
  return asignacion;
};

// Controlador para actualizar una asignacion por ID
export const putAsignacion = async (asignacion_ID: string, object:any): Promise<AsignacionPatrulleroReporteInterface> => {
  const asignacion = await Asignacion.findByPk(asignacion_ID);
  if (!asignacion) {
    throw new Error("Asignacion no encontrada");
  }

  const newAsignacionEntry: AsignacionPatrulleroReporteInterface = {
    asignacion_reporte_ID: uuidv4(),
    patrullero_ID: await verif.isPatrullero(object.patrullero_ID),
    reporte_ID: await verif.isReporte(object.reporte_ID),
  }

  await asignacion.update(newAsignacionEntry);
  return newAsignacionEntry
};

// Controlador para eliminar una asignacion por ID
export const deleteAsignacion = async (object: any): Promise<void> => {
  console.log(object.asignacion_ID)
  const result = await Asignacion.destroy({where: {asignacion_reporte_ID: object.asignacion_reporte_ID}});
  if (!result) {
    throw new Error("Asignacion no encontrada");
  }
};
