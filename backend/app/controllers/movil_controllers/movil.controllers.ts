import { v4 as uuidv4 } from 'uuid';

import db from '../../models'; 

import { MovilInterface } from '../../interfaces/types';

import * as verif from './movil.verif';

const movil = db.Movil; // Reemplaza "Movil" con el nombre correcto de tu modelo

// Controlador para crear un nuevo móvil
export const createMovil = async (object: any): Promise<MovilInterface> => {
  const newMovilEntry: MovilInterface = {
    movil_ID: uuidv4(),
    matricula: verif.parseMatricula(object.matricula_ID)
  };
  return newMovilEntry;
};

// Controlador para obtener todos los móviles
export const getMovil = async (): Promise<MovilInterface[]> => {
  const moviles = await movil.findAll();
  return moviles;
};

// Controlador para obtener un móvil por ID
export const getMovilById = async (object: any): Promise<MovilInterface[]> => {
  const moviles = await movil.findOne({where: {movil_ID: object}});
  return moviles;
};

// Controlador para actualizar un móvil por ID
export const updateMovil = async (movil_ID: string, object: any) => {
  console.log(movil_ID);
  console.log(object);

  // Verifica que la matrícula es válida
  const matriculaVerificado = verif.parseMatricula(object.matricula_ID);

  // Verificar la existencia del movil
  const existingMovil = await movil.findOne({ where: { movil_ID } });
  if (!existingMovil) {
    throw new Error('Movil no encontrado');
  }

  // Construir el objeto de actualización
  const updateData = {
    matricula: matriculaVerificado,
    // Aquí puedes añadir otros campos que quieras actualizar
  };

  // Actualizar el movil
  try {
    await existingMovil.update(updateData);
    console.log('Movil actualizado correctamente');
  } catch (error: any) {
    throw new Error('Error al actualizar el movil: ' + error.message);
  }
};

// Controlador para eliminar un movil por movil_ID
export const deleteMovil = async (object: any): Promise<void> => {
  try {
    const result = await movil.destroy({ where: { movil_ID: object.movil_ID } });
    if (result === 0) throw new Error('Matricula no encontrada');
  } catch (error: any) {
    throw new Error('Error al eliminar el movil: ' + error.message);
  }
};

