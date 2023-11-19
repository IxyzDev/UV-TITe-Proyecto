export const parseNombre = (nombreFromRequest: any): string => {
  if (!isString(nombreFromRequest)) {
    throw new Error("El nombre debe ser un string");
  }
  return nombreFromRequest;
};

export const parseContrasena = (contrasenaFromRequest: any): string => {
  if (!isString(contrasenaFromRequest)) {
    throw new Error("La contrasena debe ser un string");
  }

  return contrasenaFromRequest;
};

export const parseAdmin = (adminFromRequest: any): boolean => {
  if (!isBoolean(adminFromRequest)) {
    throw new Error("Error, los permisos deben ser un booleano");
  }
  return adminFromRequest;
};

const isString = (string: string): boolean => {
  return typeof string === "string";
};

const isBoolean = (boolean: boolean): boolean => {
  return typeof boolean === "boolean";
};
