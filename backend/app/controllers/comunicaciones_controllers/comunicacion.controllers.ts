import { v4 as uuidv4 } from "uuid";

import db from "../../models";

import { ComunicacionInterface } from "../../interfaces/types";

import * as verif from "./comunicacion.verif";

const comunicacion = db.Comunicacion;
// Controlador para crear una nueva comunicación
export const postComunicacion = async (object: any): Promise<ComunicacionInterface> => {
  const newComunicacionEntry: ComunicacionInterface = {
    comunicacion_ID: uuidv4(),
    medio_comunicacion: verif.parseMedioComunicacion(object.medio_comunicacion),
    nombre_contribuyente: verif.parseNombreContribuyente(object.nombre_contribuyente),
    telefono: verif.parseTelefono(object.telefono),
  };
  return newComunicacionEntry;
};

// Controlador para obtener todas las comunicaciones
export const getComunicacion = async (): Promise<ComunicacionInterface[]> => {
  const comunicaciones = await comunicacion.findAll();
  return comunicaciones;
};

// Controlador para obtener una comunicación por ID
// Controlador para obtener un móvil por ID
export const getComunicacionById = async (object: any): Promise<ComunicacionInterface> => {
  const comunicaciones = await comunicacion.findOne({
    where: { comunicacion_ID: object.comunicacion_ID },
  });

  if (!comunicacion) {
    throw new Error("Comunicación no encontrada");
  }

  return comunicaciones;
};

// Controlador para obtener una comunicación por ID
export const updateComunicacion = async (
  comunicacion_ID: string,
  object: any,
): Promise<ComunicacionInterface> => {
  // Buscar la comunicación en la base de datos
  const comunicacionInstance = await comunicacion.findByPk(comunicacion_ID);
  if (!comunicacionInstance) {
    throw new Error("Comunicación no encontrada");
  }

  // Validar los campos a actualizar
  const medioComunicacion = verif.parseMedioComunicacion(object.medio_comunicacion);
  const nombreContribuyente = verif.parseNombreContribuyente(object.nombre_contribuyente);
  const telefono = verif.parseTelefono(object.telefono);

  // Actualizar la comunicación
  const updatedComunicacion = await comunicacionInstance.update({
    medio_comunicacion: medioComunicacion,
    nombre_contribuyente: nombreContribuyente,
    telefono: telefono,
  });

  return updatedComunicacion;
};

// Controlador para eliminar una comunicación por ID
export const deleteComunicacion = async (object: any): Promise<void> => {
  try {
    const result = await comunicacion.destroy({
      where: { comunicacion_ID: object.comunicacion_ID },
    });
    if (result === 0) throw new Error("Comunicacion no encontrada");
  } catch (error: any) {
    throw new Error("Error al eliminar la comunicacion: " + error.message);
  }
};
