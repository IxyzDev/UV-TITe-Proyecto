import { v4 as uuidv4 } from "uuid";

import db from "../../../models";
import { FuncionariosInterface } from "../../../interfaces/types";

import * as verif from "./funcionarios.verif";

const funcionario = db.Funcionarios;

// Controlador para crear un nuevo funcionario
export const createFuncionario = async (
  object: any
): Promise<FuncionariosInterface> => {
  const newFuncionarioEntry: FuncionariosInterface = {
    funcionario_ID: uuidv4(),
    nombre_funcionario: verif.parseNombreFuncionario(object.nombre_funcionario),
    apellido_funcionario: verif.parseApellidoFuncionario(
      object.apellido_funcionario
    ),
    tipo_funcionario: verif.parseTipoFuncionario(object.tipo_funcionario),
  };
  return newFuncionarioEntry;
};

// Controlador para obtener todos los funcionarios
export const readFuncionarios = async (): Promise<FuncionariosInterface[]> => {
  const funcionarios = await funcionario.findAll();
  return funcionarios;
};

// Controlador para obtener un funcionario por ID
export const readFuncionarioById = async (
  object: any
): Promise<FuncionariosInterface[]> => {
  const funcionarios = await funcionario.findOne({
    where: { funcionario_ID: object },
  });
  return funcionarios;
};

// Controlador para actualizar un funcionario por ID
export const updateFuncionario = async (object: any): Promise<void> => {
  // Verificar la existencia del funcionario
  let existingFuncionario;
  try {
    existingFuncionario = await funcionario.findOne({
      where: { funcionario_ID: object.funcionario_ID },
    });
    if (!existingFuncionario) throw new Error("Funcionario no encontrado");
  } catch (error: any) {
    throw new Error("Error al buscar el funcionario: " + error.message);
  }

  // Verificar los campos que se van a actualizar
  let nombreVerificado, apellidoVerificado, tipoVerificado;
  try {
    nombreVerificado = verif.parseNombreFuncionario(object.nombre_funcionario);
    apellidoVerificado = verif.parseApellidoFuncionario(
      object.apellido_funcionario
    );
    tipoVerificado = verif.parseTipoFuncionario(object.tipo_funcionario);
  } catch (error: any) {
    throw new Error(
      "Error al verificar los campos del funcionario: " + error.message
    );
  }

  // Construir el objeto de actualización
  const updateData: any = {};
  if (nombreVerificado) updateData.nombre_funcionario = nombreVerificado;
  if (apellidoVerificado) updateData.apellido_funcionario = apellidoVerificado;
  if (tipoVerificado) updateData.tipo_funcionario = tipoVerificado;

  // Actualizar el funcionario
  try {
    await existingFuncionario.update(updateData);
  } catch (error: any) {
    throw new Error("Error al actualizar el funcionario: " + error.message);
  }
};

// Controlador para eliminar un funcionario por ID
export const deleteFuncionario = async (object: any): Promise<void> => {
  try {
    const result = await funcionario.destroy({
      where: { funcionario_ID: object.funcionario_ID },
    });
    if (result === 0) throw new Error("Funcionario no encontrado");
  } catch (error: any) {
    throw new Error("Error al eliminar el funcionario: " + error.message);
  }
};
