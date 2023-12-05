import db from "../../models";
const Usuarios = db.Usuarios;

export const isUbicacion = async (ubicacionFromRequest: any): Promise<string> => {
  try {
    await db.Ubicacion.findByPk(ubicacionFromRequest);
  } catch (error: any) {
    throw new Error("Ubicacion no encontrado");
  }
  return ubicacionFromRequest;
};

export const isComunicacion = async (comunicacionFromRequest: any): Promise<string> => {
  try {
    await db.Comunicacion.findByPk(comunicacionFromRequest);
  } catch (error: any) {
    throw new Error("Comunicacion no encontrado");
  }
  return comunicacionFromRequest;
};

export const isUser = async (UsuarioFromRequest: any): Promise<string> => {
  try {
    if (!(await Usuarios.findByPk(UsuarioFromRequest))) {
      throw new Error("El usuario no existe o no esta autorizado");
    }
  } catch (error: any) {
    throw new Error("El usuario no existe o no esta autorizado");
  }
  return UsuarioFromRequest;
};

export const parseFecha = async (fechaFromRequest: any): Promise<string> => {
  if (!isString(fechaFromRequest)) {
    throw new Error("La fecha debe ser un string");
  }
  return fechaFromRequest;
};

export const parseHora = async (horaFromRequest: any): Promise<string> => {
  if (!isString(horaFromRequest)) {
    throw new Error("La hora debe ser un string");
  }
  return horaFromRequest;
};

export const parseDetalle = async (detalleFromRequest: any): Promise<string> => {
  if (!isString(detalleFromRequest)) {
    throw new Error("El detalle debe ser un string");
  }
  return detalleFromRequest;
};

export const parseObservaciones = async (observacionesFromRequest: any): Promise<string> => {
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

export const parseGrupoDelictual = async (grupoDelictualFromRequest: any): Promise<string> => {
  if (!isString(grupoDelictualFromRequest)) {
    throw new Error("El grupo delictual debe ser un string");
  }
  return grupoDelictualFromRequest;
};

export const parseDerivado = async (derivadoFromRequest: any): Promise<string> => {
  if (!isString(derivadoFromRequest)) {
    throw new Error("El derivado debe ser un string");
  }
  return derivadoFromRequest;
};

export const parseNumMovil = async (numMovilFromRequest: any): Promise<number> => {
  if (!isNumber(numMovilFromRequest)) {
    throw new Error("El numero de movil debe ser un number");
  }
  return numMovilFromRequest;
};

export const parseNombrePatrullero = async (nombrePatrulleroFromRequest: any): Promise<string> => {
  if (!isString(nombrePatrulleroFromRequest)) {
    throw new Error("El nombre del patrullero debe ser un string");
  }
  return nombrePatrulleroFromRequest;
};

export const isString = (string: string): boolean => {
  return typeof string === "string";
};

export const isNumber = (number: number): boolean => {
  return typeof number === "number";
};
