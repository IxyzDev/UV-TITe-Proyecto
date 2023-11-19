import { v4 as uuidv4 } from "uuid";

import db from "../../models";

import { ReportesInterface } from "../../interfaces/types";

import * as verif from "./reporte.verif";

const Reportes = db.Reportes;

const verifReporte = async (object: any): Promise<ReportesInterface> => {
  const newReporteEntry: ReportesInterface = {
    reporte_ID: uuidv4(),
    ubicacion_ID: await verif.isUbicacion(object.ubicacion_ID),
    comunicacion_ID: await verif.isComunicacion(object.comunicacion_ID),
    nombre_usuario: await verif.isUser(object.nombre_usuario),
    fecha_y_hora_envio: await verif.parseFecha(object.fecha_y_hora),
    hora_evento: await verif.parseHora(object.hora_evento),
    motivo_detalle: await verif.parseMotivo(object.motivo),
    observaciones: await verif.parseObservaciones(object.observaciones),
    grupo_delictual: await verif.parseGrupoDelictual(object.grupo_delictual),
    derivado: await verif.parseDerivado(object.derivado),
    num_movil: await verif.parseNumMovil(object.num_movil),
  };
  return newReporteEntry;
};

// Controlador para crear un nuevo reporte
export const postReporte = async (object: any): Promise<ReportesInterface> => {
  const newReporteEntry: ReportesInterface = await verifReporte(object);
  const reporte = await Reportes.create(newReporteEntry);
  return reporte;
};

// Controlador para obtener todos los reportes
export const getReportes = async (): Promise<ReportesInterface[]> => {
  return await Reportes.findAll();
};

// Controlador para obtener un reporte por ID
export const getReporteById = async (reporte_ID: string): Promise<ReportesInterface> => {
  return await Reportes.findByPk(reporte_ID);
};

// Controlador para actualizar un reporte por ID
export const putReporte = async (reporte_ID: string, object: any): Promise<void> => {
  try {
    // Validación de los datos de entrada
    const updateReporte = await verifReporte(object);

    // Intenta actualizar el usuario directamente
    const [updatedRows] = await Reportes.update(updateReporte, {
      where: { reporte_ID },
    });

    // Si no se actualizó ninguna fila, el usuario no existe
    if (updatedRows === 0) {
      throw new Error("El reporte a actualizar no existe");
    }
  } catch (error: any) {
    throw new Error("Error al actualizar el reporte: " + error.message);
  }
};

// Controlador para eliminar un reporte por ID
export const deleteReporte = async (object: any): Promise<void> => {
  try {
    await Reportes.destroy({ where: { reporte_ID: object.reporte_ID } });
  } catch (error: any) {
    throw new Error("reporte no encontrado");
  }
};
