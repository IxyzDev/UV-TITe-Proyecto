import db from "../../../models";

export const isUbicacion = async (
  ubicacionFromRequest: any
): Promise<string> => {
  try {
    await db.Ubicacion.findByPk(ubicacionFromRequest);
  } catch (error: any) {
    throw new Error("Ubicacion no encontrado");
  }
  return ubicacionFromRequest;
};

export const isComunicacion = async (
  comunicacionFromRequest: any
): Promise<string> => {
  try {
    await db.Comunicacion.findByPk(comunicacionFromRequest);
  } catch (error: any) {
    throw new Error("Comunicacion no encontrado");
  }
  return comunicacionFromRequest;
};

export const isOperador = async (OperadorFromRequest: any): Promise<string> => {
  try {
    await db.Operadores.findByPk(OperadorFromRequest);
  } catch (error: any) {
    throw new Error("Operador no encontrado");
  }
  return OperadorFromRequest;
};

export const parseFecha = async (fechaFromRequest: any): Promise<string> => {
  if (!isString(fechaFromRequest)) {
    throw new Error("La fecha debe ser un string");
  }
  return fechaFromRequest;
};

export const parseDetalle = async (
  detalleFromRequest: any
): Promise<string> => {
  if (!isString(detalleFromRequest)) {
    throw new Error("El detalle debe ser un string");
  }
  return detalleFromRequest;
};

export const parseObservaciones = async (
  observacionesFromRequest: any
): Promise<string> => {
  if (!isString(observacionesFromRequest)) {
    throw new Error("las observaciones deben ser un string");
  }
  return observacionesFromRequest;
};

export const parseMotivo = async (motivoFromRequest: any): Promise<string> => {
  if (!isString(motivoFromRequest)) {
    throw new Error("El motivo debe ser un string");
  }
  return motivoFromRequest;
};

export const parseGrupoDelictual = async (
  grupoDelictualFromRequest: any
): Promise<string> => {
  if (!isString(grupoDelictualFromRequest)) {
    throw new Error("El grupo delictual debe ser un string");
  }
  return grupoDelictualFromRequest;
};

export const parseDerivado = async (
  derivadoFromRequest: any
): Promise<string> => {
  if (!isString(derivadoFromRequest)) {
    throw new Error("El derivado debe ser un string");
  }
  return derivadoFromRequest;
};

export const isString = (string: string): boolean => {
  return typeof string === "string";
};
