import { Request, Response } from 'express';
import db from '../../models'; // Asegúrate de importar correctamente tu modelo Movil

const Movil = db.Movil; // Reemplaza "Movil" con el nombre correcto de tu modelo

// Controlador para crear un nuevo móvil
export const createMovil = async (req: Request, res: Response): Promise<void> => {
  try {
    const { matricula_ID } = req.body;

    // Valida los datos de entrada
    if (!matricula_ID) {
      res.status(400).json({ success: false, message: 'Datos de móvil incompletos' });
      return;
    }

    // Crea un nuevo móvil en la base de datos
    const nuevoMovil = await Movil.create({
      matricula_ID,
    });

    res.status(201).json({
      success: true,
      message: 'Móvil registrado con éxito',
      data: nuevoMovil,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error al registrar el móvil',
    });
  }
};

// Controlador para obtener todos los móviles
export const getAllMoviles = async (_req: Request, res: Response): Promise<void> => {
  try {
    // Consulta todos los móviles en la base de datos
    const moviles = await Movil.findAll();

    res.status(200).json({ success: true, data: moviles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al obtener los móviles' });
  }
};

// Controlador para obtener un móvil por ID
export const getMovilById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { matricula_ID } = req.params;

    // Busca un móvil por su ID en la base de datos
    const movil = await Movil.findByPk(matricula_ID);

    if (!movil) {
      res.status(404).json({ success: false, message: 'Móvil no encontrado' });
      return;
    }

    res.status(200).json({ success: true, data: movil });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al obtener el móvil' });
  }
};

// Controlador para actualizar un móvil por ID
export const updateMovil = async (req: Request, res: Response): Promise<void> => {
  try {
    const { matricula_ID } = req.params;

    // Valida si el móvil existe
    const movilExistente = await Movil.findByPk(matricula_ID);

    if (!movilExistente) {
      res.status(404).json({ success: false, message: 'Móvil no encontrado' });
      return;
    }

    // Actualiza los datos del móvil
    // Aquí puedes agregar la lógica para actualizar los campos que necesites

    res.status(200).json({ success: true, message: 'Móvil actualizado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al actualizar el móvil' });
  }
};

// Controlador para eliminar un móvil por ID
export const deleteMovil = async (req: Request, res: Response): Promise<void> => {
  try {
    const { matricula_ID } = req.params;

    // Busca un móvil por su ID en la base de datos
    const movil = await Movil.findByPk(matricula_ID);

    if (!movil) {
      res.status(404).json({ success: false, message: 'Móvil no encontrado' });
      return;
    }

    // Elimina el móvil de la base de datos
    await movil.destroy();

    res.status(200).json({ success: true, message: 'Móvil eliminado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al eliminar el móvil' });
  }
};
