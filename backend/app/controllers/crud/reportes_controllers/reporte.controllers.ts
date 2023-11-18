import { v4 as uuidv4 } from "uuid";

import db from "../../../models";

import { ReportesInterface } from "../../../interfaces/types";

import * as verif from "./reporte.verif";

const Reportes = db.Reportes;

// Controlador para crear un nuevo reporte
export const postReporte = async (object: any): Promise<ReportesInterface> => {
  const newReporteEntry: ReportesInterface = {
    reporte_ID: uuidv4(),
    ubicacion_ID: await verif.isUbicacion(object.ubicacion_ID),
    comunicacion_ID: await verif.isComunicacion(object.comunicacion_ID),
    user_ID: await verif.isUser(object.user_ID),
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

// Controlador para obtener todos los reportes
export const getReportes = async (): Promise<ReportesInterface[]> => {
  const reportes = await Reportes.findAll();
  return reportes;
};

// Controlador para obtener un reporte por ID
export const getReporteById = async (
  reporte_ID: string
): Promise<ReportesInterface> => {
  const reportes = await Reportes.findByPk(reporte_ID);
  return reportes;
};

// Controlador para actualizar un reporte por ID
export const putReporte = async (
  reporte_ID: string,
  object: any
): Promise<void> => {
  try {
    await Reportes.findByPk(reporte_ID);
  } catch (error: any) {
    throw new Error("reporte no encontrado");
  }

  console.log(object);

  const newReportesEntry: ReportesInterface = {
    reporte_ID: uuidv4(),
    ubicacion_ID: await verif.isUbicacion(object.ubicacion_ID),
    comunicacion_ID: await verif.isComunicacion(object.comunicacion_ID),
    user_ID: await verif.isUser(object.user_ID),
    fecha_y_hora_envio: await verif.parseFecha(object.fecha_y_hora),
    hora_evento: await verif.parseHora(object.hora_evento),
    motivo_detalle: await verif.parseMotivo(object.motivo),
    observaciones: await verif.parseObservaciones(object.observaciones),
    grupo_delictual: await verif.parseGrupoDelictual(object.grupo_delictual),
    derivado: await verif.parseDerivado(object.derivado),
    num_movil: await verif.parseNumMovil(object.num_movil),
  };

  await Reportes.update(newReportesEntry, {
    where: { reporte_ID: reporte_ID },
  });
};

// Controlador para eliminar un reporte por ID
export const deleteReporte = async (object: any): Promise<void> => {
  try {
    await Reportes.destroy({ where: { ubicacion_ID: object.ubicacion_ID } });
  } catch (error: any) {
    throw new Error("reporte no encontrado");
  }
};
