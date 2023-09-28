import { Request, Response } from 'express';
import db from '../models'; // Asegúrate de importar correctamente tu modelo Ubicacion

const Ubicacion = db.Ubicacion; // Reemplaza "Ubicacion" con el nombre correcto de tu modelo

// Controlador para crear una nueva ubicación
export const createUbicacion = async (req: Request, res: Response): Promise<void> => {
  try {
    const { ubicacion_ID, subsector_ID, direccion, coordenadas, n_domicilio, lugar } = req.body;

    // Valida los datos de entrada
    if (!ubicacion_ID || !subsector_ID || !direccion || !coordenadas || !n_domicilio || !lugar) {
      res.status(400).json({ success: false, message: 'Datos de ubicación incompletos' });
      return;
    }

    // Crea una nueva ubicación en la base de datos
    const nuevaUbicacion = await Ubicacion.create({
      ubicacion_ID,
      subsector_ID,
      direccion,
      coordenadas,
      n_domicilio,
      lugar,
    });

    res.status(201).json({
      success: true,
      message: 'Ubicación registrada con éxito',
      data: nuevaUbicacion,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error al registrar la ubicación',
    });
  }
};

// Controlador para obtener todas las ubicaciones
export const getAllUbicaciones = async (_req: Request, res: Response): Promise<void> => {
  try {
    // Consulta todas las ubicaciones en la base de datos
    const ubicaciones = await Ubicacion.findAll();

    res.status(200).json({ success: true, data: ubicaciones });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al obtener las ubicaciones' });
  }
};

// Controlador para obtener una ubicación por ID
export const getUbicacionById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { ubicacion_ID } = req.params;

    // Busca una ubicación por su ID en la base de datos
    const ubicacion = await Ubicacion.findByPk(ubicacion_ID);

    if (!ubicacion) {
      res.status(404).json({ success: false, message: 'Ubicación no encontrada' });
      return;
    }

    res.status(200).json({ success: true, data: ubicacion });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al obtener la ubicación' });
  }
};

// Controlador para actualizar una ubicación por ID
export const updateUbicacion = async (req: Request, res: Response): Promise<void> => {
  try {
    const { ubicacion_ID } = req.params;
    const { subsector_ID, direccion, coordenadas, n_domicilio, lugar } = req.body;

    // Busca una ubicación por su ID en la base de datos
    const ubicacion = await Ubicacion.findByPk(ubicacion_ID);

    if (!ubicacion) {
      res.status(404).json({ success: false, message: 'Ubicación no encontrada' });
      return;
    }

    // Actualiza los datos de la ubicación
    ubicacion.subsector_ID = subsector_ID; // Actualiza los campos que necesites
    ubicacion.direccion = direccion;
    ubicacion.coordenadas = coordenadas;
    ubicacion.n_domicilio = n_domicilio;
    ubicacion.lugar = lugar;

    await ubicacion.save(); // Guarda los cambios en la base de datos

    res.status(200).json({ success: true, message: 'Ubicación actualizada con éxito', data: ubicacion });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al actualizar la ubicación' });
  }
};

// Controlador para eliminar una ubicación por ID
export const deleteUbicacion = async (req: Request, res: Response): Promise<void> => {
  try {
    const { ubicacion_ID } = req.params;

    // Busca una ubicación por su ID en la base de datos
    const ubicacion = await Ubicacion.findByPk(ubicacion_ID);

    if (!ubicacion) {
      res.status(404).json({ success: false, message: 'Ubicación no encontrada' });
      return;
    }

    // Elimina la ubicación de la base de datos
    await ubicacion.destroy();

    res.status(200).json({ success: true, message: 'Ubicación eliminada con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al eliminar la ubicación' });
  }
};
