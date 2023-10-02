import { Request, Response } from 'express';
import db from '../../models'; // Asegúrate de importar correctamente tu modelo Comunicacion

const Comunicacion = db.Comunicacion; // Reemplaza "Comunicacion" con el nombre correcto de tu modelo

// Controlador para crear una nueva comunicación
export const createComunicacion = async (req: Request, res: Response): Promise<void> => {
  try {
    const { comunicacion_ID, medio_comunicacion, nombre_contribuyente, telefono } = req.body;

    // Valida los datos de entrada
    if (!comunicacion_ID || !medio_comunicacion || !nombre_contribuyente || !telefono) {
      res.status(400).json({ success: false, message: 'Datos de comunicación incompletos' });
      return;
    }

    // Crea una nueva comunicación en la base de datos
    const nuevaComunicacion = await Comunicacion.create({
      comunicacion_ID,
      medio_comunicacion,
      nombre_contribuyente,
      telefono,
    });

    res.status(201).json({
      success: true,
      message: 'Comunicación registrada con éxito',
      data: nuevaComunicacion,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error al registrar la comunicación',
    });
  }
};

// Controlador para obtener todas las comunicaciones
export const getAllComunicaciones = async (_req: Request, res: Response): Promise<void> => {
  try {
    // Consulta todas las comunicaciones en la base de datos
    const comunicaciones = await Comunicacion.findAll();

    res.status(200).json({ success: true, data: comunicaciones });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al obtener las comunicaciones' });
  }
};

// Controlador para obtener una comunicación por ID
export const getComunicacionById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { comunicacion_ID } = req.params;

    // Busca una comunicación por su ID en la base de datos
    const comunicacion = await Comunicacion.findByPk(comunicacion_ID);

    if (!comunicacion) {
      res.status(404).json({ success: false, message: 'Comunicación no encontrada' });
      return;
    }

    res.status(200).json({ success: true, data: comunicacion });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al obtener la comunicación' });
  }
};

// Controlador para actualizar una comunicación por ID
export const updateComunicacion = async (req: Request, res: Response): Promise<void> => {
  try {
    const { comunicacion_ID } = req.params;
    const { medio_comunicacion, nombre_contribuyente, telefono } = req.body;

    // Busca una comunicación por su ID en la base de datos
    const comunicacion = await Comunicacion.findByPk(comunicacion_ID);

    if (!comunicacion) {
      res.status(404).json({ success: false, message: 'Comunicación no encontrada' });
      return;
    }

    // Actualiza los datos de la comunicación
    comunicacion.medio_comunicacion = medio_comunicacion; // Actualiza los campos que necesites
    comunicacion.nombre_contribuyente = nombre_contribuyente;
    comunicacion.telefono = telefono;

    await comunicacion.save(); // Guarda los cambios en la base de datos

    res.status(200).json({ success: true, message: 'Comunicación actualizada con éxito', data: comunicacion });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al actualizar la comunicación' });
  }
};

// Controlador para eliminar una comunicación por ID
export const deleteComunicacion = async (req: Request, res: Response): Promise<void> => {
  try {
    const { comunicacion_ID } = req.params;

    // Busca una comunicación por su ID en la base de datos
    const comunicacion = await Comunicacion.findByPk(comunicacion_ID);

    if (!comunicacion) {
      res.status(404).json({ success: false, message: 'Comunicación no encontrada' });
      return;
    }

    // Elimina la comunicación de la base de datos
    await comunicacion.destroy();

    res.status(200).json({ success: true, message: 'Comunicación eliminada con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al eliminar la comunicación' });
  }
};
