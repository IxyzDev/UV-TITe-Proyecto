import { Request, Response } from 'express';
import db from '../../models'; // Asegúrate de importar correctamente tu modelo AsignacionPatrulleroReporte

const AsignacionPatrulleroReporte = db.AsignacionPatrulleroReporte; // Reemplaza "AsignacionPatrulleroReporte" con el nombre correcto de tu modelo

// Controlador para crear una nueva asignación de patrullero a reporte
export const createAsignacionPatrulleroReporte = async (req: Request, res: Response): Promise<void> => {
  try {
    const { asignacion_reporte_ID, patrullero_ID, reporte_ID } = req.body;

    // Valida los datos de entrada
    if (!asignacion_reporte_ID || !patrullero_ID || !reporte_ID) {
      res.status(400).json({ success: false, message: 'Datos de asignación incompletos' });
      return;
    }

    // Crea una nueva asignación en la base de datos
    const nuevaAsignacion = await AsignacionPatrulleroReporte.create({
      asignacion_reporte_ID,
      patrullero_ID,
      reporte_ID,
    });

    res.status(201).json({
      success: true,
      message: 'Asignación de patrullero a reporte registrada con éxito',
      data: nuevaAsignacion,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error al registrar la asignación de patrullero a reporte',
    });
  }
};

// Controlador para obtener todas las asignaciones de patrullero a reporte
export const getAllAsignacionesPatrulleroReporte = async (_req: Request, res: Response): Promise<void> => {
  try {
    // Consulta todas las asignaciones en la base de datos
    const asignaciones = await AsignacionPatrulleroReporte.findAll();

    res.status(200).json({ success: true, data: asignaciones });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al obtener las asignaciones de patrullero a reporte' });
  }
};

// Controlador para obtener una asignación de patrullero a reporte por ID
export const getAsignacionPatrulleroReporteById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { asignacion_reporte_ID } = req.params;

    // Busca una asignación por su ID en la base de datos
    const asignacion = await AsignacionPatrulleroReporte.findByPk(asignacion_reporte_ID);

    if (!asignacion) {
      res.status(404).json({ success: false, message: 'Asignación no encontrada' });
      return;
    }

    res.status(200).json({ success: true, data: asignacion });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al obtener la asignación de patrullero a reporte' });
  }
};

// Controlador para actualizar una asignación de patrullero a reporte por ID
export const updateAsignacionPatrulleroReporte = async (req: Request, res: Response): Promise<void> => {
  try {
    const { asignacion_reporte_ID } = req.params;
    const { patrullero_ID, reporte_ID } = req.body;

    // Busca una asignación por su ID en la base de datos
    const asignacion = await AsignacionPatrulleroReporte.findByPk(asignacion_reporte_ID);

    if (!asignacion) {
      res.status(404).json({ success: false, message: 'Asignación no encontrada' });
      return;
    }

    // Actualiza los datos de la asignación
    asignacion.patrullero_ID = patrullero_ID; // Actualiza los campos que necesites
    asignacion.reporte_ID = reporte_ID;

    await asignacion.save(); // Guarda los cambios en la base de datos

    res.status(200).json({ success: true, message: 'Asignación actualizada con éxito', data: asignacion });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al actualizar la asignación de patrullero a reporte' });
  }
};

// Controlador para eliminar una asignación de patrullero a reporte por ID
export const deleteAsignacionPatrulleroReporte = async (req: Request, res: Response): Promise<void> => {
  try {
    const { asignacion_reporte_ID } = req.params;

    // Busca una asignación por su ID en la base de datos
    const asignacion = await AsignacionPatrulleroReporte.findByPk(asignacion_reporte_ID);

    if (!asignacion) {
      res.status(404).json({ success: false, message: 'Asignación no encontrada' });
      return;
    }

    // Elimina la asignación de la base de datos
    await asignacion.destroy();

    res.status(200).json({ success: true, message: 'Asignación eliminada con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al eliminar la asignación de patrullero a reporte' });
  }
};
