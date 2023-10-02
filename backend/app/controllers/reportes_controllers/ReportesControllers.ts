import { Request, Response } from 'express';
import db from '../../models'; // Asegúrate de importar correctamente tu modelo Reportes

const Reportes = db.Reportes; // Reemplaza "Reportes" con el nombre correcto de tu modelo

// Controlador para crear un nuevo reporte
export const createReporte = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      reporte_ID,
      ubicacion_ID,
      comunicacion_ID,
      operador_ID,
      fecha_y_hora,
      detalle,
      caso,
      observaciones,
      motivo,
      grupo_delictual,
      derivado,
    } = req.body;

    // Valida los datos de entrada
    if (
      !reporte_ID ||
      !ubicacion_ID ||
      !comunicacion_ID ||
      !operador_ID ||
      !fecha_y_hora ||
      !detalle ||
      !caso ||
      !observaciones ||
      !motivo
    ) {
      res.status(400).json({ success: false, message: 'Datos de reporte incompletos' });
      return;
    }

    // Crea un nuevo reporte en la base de datos
    const nuevoReporte = await Reportes.create({
      reporte_ID,
      ubicacion_ID,
      comunicacion_ID,
      operador_ID,
      fecha_y_hora,
      detalle,
      caso,
      observaciones,
      motivo,
      grupo_delictual,
      derivado,
    });

    res.status(201).json({
      success: true,
      message: 'Reporte registrado con éxito',
      data: nuevoReporte,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error al registrar el reporte',
    });
  }
};

// Controlador para obtener todos los reportes
export const getAllReportes = async (_req: Request, res: Response): Promise<void> => {
  try {
    // Consulta todos los reportes en la base de datos
    const reportes = await Reportes.findAll();

    res.status(200).json({ success: true, data: reportes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al obtener los reportes' });
  }
};

// Controlador para obtener un reporte por ID
export const getReporteById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { reporte_ID } = req.params;

    // Busca un reporte por su ID en la base de datos
    const reporte = await Reportes.findByPk(reporte_ID);

    if (!reporte) {
      res.status(404).json({ success: false, message: 'Reporte no encontrado' });
      return;
    }

    res.status(200).json({ success: true, data: reporte });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al obtener el reporte' });
  }
};

// Controlador para actualizar un reporte por ID
export const updateReporte = async (req: Request, res: Response): Promise<void> => {
  try {
    const { reporte_ID } = req.params;

    // Valida si el reporte existe
    const reporteExistente = await Reportes.findByPk(reporte_ID);

    if (!reporteExistente) {
      res.status(404).json({ success: false, message: 'Reporte no encontrado' });
      return;
    }

    // Actualiza los datos del reporte
    // Aquí puedes agregar la lógica para actualizar los campos que necesites

    res.status(200).json({ success: true, message: 'Reporte actualizado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al actualizar el reporte' });
  }
};

// Controlador para eliminar un reporte por ID
export const deleteReporte = async (req: Request, res: Response): Promise<void> => {
  try {
    const { reporte_ID } = req.params;

    // Busca un reporte por su ID en la base de datos
    const reporte = await Reportes.findByPk(reporte_ID);

    if (!reporte) {
      res.status(404).json({ success: false, message: 'Reporte no encontrado' });
      return;
    }

    // Elimina el reporte de la base de datos
    await reporte.destroy();

    res.status(200).json({ success: true, message: 'Reporte eliminado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al eliminar el reporte' });
  }
};

// Otras funciones que pueden ser útiles para manipular reportes, como buscar por ubicación, operador, etc.
