import { v4 as uuidv4 } from "uuid";

import db from "../../../models";

import { PatrullerosInterface } from "../../../interfaces/types";

import * as verif from "./patrullero.verif";

const Patrullero = db.Patrulleros;

// Controlador para crear un nuevo patrullero
export const postPatrullero = async (
  object: any,
): Promise<PatrullerosInterface> => {
  const newPatrulleroEntry: PatrullerosInterface = {
    patrullero_ID: uuidv4(),
    funcionario_ID: await verif.isFuncionario(object.funcionario_ID),
  };

  //console.log(newPatrulleroEntry)

  return newPatrulleroEntry;
};

// Controlador para obtener todos los patrulleros
export const getPatrulleros = async (): Promise<PatrullerosInterface> => {
  const patrulleros = await Patrullero.findAll();
  return patrulleros;
};

// Controlador para obtener un patrullero por ID
export const getPatrulleroById = async (
  object: any,
): Promise<PatrullerosInterface> => {
  const patrullero = await Patrullero.findByPk(object.patrullero_ID);
  if (!patrullero) {
    throw new Error("Patrullero no encontrado");
  }
  return patrullero;
};

// Controlador para actualizar un patrullero por ID
// export const updatePatrullero = async (patrullero_ID: string, object: any): Promise<PatrullerosInterface> => {

// };

// Controlador para eliminar una ubicación por ID
export const deletePatrullero = async (object: any): Promise<void> => {
  const result = await Patrullero.destroy({
    where: { patrullero_ID: object.patrullero_ID },
  });
  if (!result) {
    throw new Error("Patrullero no encontrada");
  }
};
