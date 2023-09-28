import { Request, Response } from 'express';
import db from '../models'; // Asegúrate de importar correctamente tu modelo Patrulleros

const Patrulleros = db.Patrulleros; // Reemplaza "Patrulleros" con el nombre correcto de tu modelo

// Controlador para crear un nuevo patrullero
export const createPatrullero = async (req: Request, res: Response): Promise<void> => {
  try {
    const { patrullero_ID, funcionario_ID } = req.body;

    // Valida los datos de entrada
    if (!patrullero_ID || !funcionario_ID) {
      res.status(400).json({ success: false, message: 'Datos de patrullero incompletos' });
      return;
    }

    // Crea un nuevo patrullero en la base de datos
    const nuevoPatrullero = await Patrulleros.create({
      patrullero_ID,
      funcionario_ID,
    });

    res.status(201).json({
      success: true,
      message: 'Patrullero registrado con éxito',
      data: nuevoPatrullero,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error al registrar el patrullero',
    });
  }
};

// Controlador para obtener todos los patrulleros
export const getAllPatrulleros = async (_req: Request, res: Response): Promise<void> => {
  try {
    // Consulta todos los patrulleros en la base de datos
    const patrulleros = await Patrulleros.findAll();

    res.status(200).json({ success: true, data: patrulleros });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al obtener los patrulleros' });
  }
};

// Controlador para obtener un patrullero por ID
export const getPatrulleroById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { patrullero_ID } = req.params;

    // Busca un patrullero por su ID en la base de datos
    const patrullero = await Patrulleros.findByPk(patrullero_ID);

    if (!patrullero) {
      res.status(404).json({ success: false, message: 'Patrullero no encontrado' });
      return;
    }

    res.status(200).json({ success: true, data: patrullero });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al obtener el patrullero' });
  }
};

// Controlador para actualizar un patrullero por ID
export const updatePatrullero = async (req: Request, res: Response): Promise<void> => {
  try {
    const { patrullero_ID } = req.params;
    const { funcionario_ID } = req.body;

    // Busca un patrullero por su ID en la base de datos
    const patrullero = await Patrulleros.findByPk(patrullero_ID);

    if (!patrullero) {
      res.status(404).json({ success: false, message: 'Patrullero no encontrado' });
      return;
    }

    // Actualiza los datos del patrullero
    patrullero.funcionario_ID = funcionario_ID; // Actualiza los campos que necesites

    await patrullero.save(); // Guarda los cambios en la base de datos

    res.status(200).json({ success: true, message: 'Patrullero actualizado con éxito', data: patrullero });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al actualizar el patrullero' });
  }
};

// Controlador para eliminar un patrullero por ID
export const deletePatrullero = async (req: Request, res: Response): Promise<void> => {
  try {
    const { patrullero_ID } = req.params;

    // Busca un patrullero por su ID en la base de datos
    const patrullero = await Patrulleros.findByPk(patrullero_ID);

    if (!patrullero) {
      res.status(404).json({ success: false, message: 'Patrullero no encontrado' });
      return;
    }

    // Elimina el patrullero de la base de datos
    await patrullero.destroy();

    res.status(200).json({ success: true, message: 'Patrullero eliminado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al eliminar el patrullero' });
  }
};
