import { v4 as uuidv4 } from "uuid";

import db from "../../../models";

import { OperadoresInterface } from "../../../interfaces/types";

//import * as verif from './operador.verif';

const Operador = db.Operadores;
const Funcionario = db.Funcionarios;

// Controlador para crear un nuevo operador
export const postOperador = async (
  object: any,
): Promise<OperadoresInterface> => {
  console.log(object);
  const comprobarFuncionario = await Funcionario.findOne({
    where: { funcionario_ID: object.funcionario_ID },
  });

  if (comprobarFuncionario.funcionario_ID !== object.funcionario_ID) {
    throw new Error("El funcionario no existe");
  }

  const newOperadorEntry: OperadoresInterface = {
    operador_ID: uuidv4(),
    funcionario_ID: object.funcionario_ID,
  };

  //console.log(newOperadorEntry)

  return newOperadorEntry;
};

// Controlador para obtener todos los operadors
export const getOperadores = async (): Promise<OperadoresInterface> => {
  const operadors = await Operador.findAll();
  return operadors;
};

// Controlador para obtener un operador por ID
export const getOperadorById = async (
  object: any,
): Promise<OperadoresInterface> => {
  const operador = await Operador.findByPk(object.operador_ID);
  if (!operador) {
    throw new Error("Operador no encontrado");
  }
  return operador;
};

// Controlador para actualizar un operador por ID
// export const updateOperador = async (operador_ID: string, object: any): Promise<OperadoresInterface> => {

// };

// Controlador para eliminar una ubicación por ID
export const deleteOperador = async (object: any): Promise<void> => {
  const result = await Operador.destroy({
    where: { operador_ID: object.operador_ID },
  });
  if (!result) {
    throw new Error("Operador no encontrada");
  }
};
