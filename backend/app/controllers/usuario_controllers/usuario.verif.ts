// Verificar integridad del nombre de usuario
export const parseNombre = (nombreFromRequest: any): string => {
  if (!isString(nombreFromRequest)) {
    throw new Error("El nombre de usuario debe ser un string");
  }

  // Verificar que no tenga espacios
  if (nombreFromRequest.includes(" ")) {
    throw new Error("El nombre de usuario no debe contener espacios");
  }

  // Verificar longitud mínima y máxima, si lo deseas
  if (nombreFromRequest.length < 3 || nombreFromRequest.length > 20) {
    throw new Error("El nombre de usuario debe tener entre 3 y 20 caracteres");
  }

  // Verificar si solo contiene caracteres alfanuméricos (opcional)
  // Puedes ajustar esta expresión regular según tus necesidades
  if (!/^[a-zA-Z0-9]+$/.test(nombreFromRequest)) {
    throw new Error("El nombre de usuario debe ser alfanumérico");
  }

  return nombreFromRequest;
};

export const parseNombrePersonal = (nombrePersonalFromRequest: any): string => {
  if (!isString(nombrePersonalFromRequest)) {
    throw new Error("El nombre del personal debe ser un string");
  }
  return nombrePersonalFromRequest;
};

export const parseContrasena = (contrasenaFromRequest: any): string => {
  if (!isString(contrasenaFromRequest)) {
    throw new Error("La contraseña debe ser un string");
  }

  // Verificar que no tenga espacios
  if (contrasenaFromRequest.includes(" ")) {
    throw new Error("La contraseña no debe contener espacios");
  }

  // Verificar la longitud mínima de la contraseña
  if (contrasenaFromRequest.length < 8) {
    throw new Error("La contraseña debe tener al menos 8 caracteres");
  }

  // Verificar si contiene al menos una letra mayúscula
  if (!/[A-Z]/.test(contrasenaFromRequest)) {
    throw new Error("La contraseña debe contener al menos una letra mayúscula");
  }

  // Verificar si contiene al menos una letra minúscula
  if (!/[a-z]/.test(contrasenaFromRequest)) {
    throw new Error("La contraseña debe contener al menos una letra minúscula");
  }

  // Verificar si contiene al menos un número
  if (!/[0-9]/.test(contrasenaFromRequest)) {
    throw new Error("La contraseña debe contener al menos un número");
  }

  // Verificar si contiene al menos un caracter especial
  if (!/[^A-Za-z0-9]/.test(contrasenaFromRequest)) {
    throw new Error("La contraseña debe contener al menos un caracter especial");
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
