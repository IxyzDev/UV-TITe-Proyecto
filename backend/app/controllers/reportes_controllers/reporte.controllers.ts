import { v4 as uuidv4 } from "uuid";

import db from "../../models";

import { ReportesInterface, VerifReportesInterface } from "../../interfaces/types";

import * as verif from "./reporte.verif";

import * as ubicacionControllers from "../ubicacion_controllers/ubicacion.controllers";
import * as comunicacionControllers from "../comunicaciones_controllers/comunicacion.controllers";

const Reportes = db.Reportes;

export const verifReporte = async (object: any): Promise<VerifReportesInterface> => {
  const newVerifReporte: VerifReportesInterface = {
    fecha_envio: await verif.parseFecha(object.fecha_envio),
    hora_envio: await verif.parseHora(object.hora_envio),
    hora_evento: await verif.parseHora(object.hora_evento),
    nombre_patrullero: await verif.parseNombrePatrullero(object.nombre_patrullero),
    motivo_detalle: await verif.parseMotivo(object.motivo_detalle),
    observaciones: await verif.parseObservaciones(object.observaciones),
    grupo_delictual: await verif.parseGrupoDelictual(object.grupo_delictual),
    num_movil: await verif.parseNumMovil(object.num_movil),
  };
  return newVerifReporte;
};

// Controlador para crear un nuevo reporte
export const postReporte = async (object: any): Promise<ReportesInterface> => {
  const acceptedNewReporteEntry = await verifReporte(object); // Verifica los datos de entrada

  const resultado_ubicacion = await ubicacionControllers.postUbicacion(object); // Crea la ubicacion

  const resultado_comunicacion = await comunicacionControllers.postComunicacion(object);

  // const newReporteEntry: ReportesInterface = await verifReporte(object);

  const newReporteEntry: ReportesInterface = {
    reporte_ID: uuidv4(),
    ubicacion_ID: resultado_ubicacion.ubicacion_ID,
    comunicacion_ID: resultado_comunicacion.comunicacion_ID,
    nombre_usuario: await verif.isUser(object.nombre_usuario),
    ...acceptedNewReporteEntry, // Aquí se expanden las propiedades verificadas
  };

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
