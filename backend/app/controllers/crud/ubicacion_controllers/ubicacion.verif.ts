export const parseDireccion = (DireccionFromRequest: any): string => {
  if (!isString(DireccionFromRequest)) {
    throw new Error("La direccion debe ser un string");
  }

  return DireccionFromRequest;
};

export const parseCoordenadas = (CoordenadasFromRequest: any): string => {
  if (!isString(CoordenadasFromRequest)) {
    throw new Error("Las coordenadas deben ser un string");
  }

  return CoordenadasFromRequest;
};

export const parseNDomicilio = (DomicilioFromRequest: any): string => {
  if (!isString(DomicilioFromRequest)) {
    throw new Error("El n de domicilio debe ser un string");
  }

  return DomicilioFromRequest;
};

export const parseLugar = (LugarFromRequest: any): string => {
  if (!isString(LugarFromRequest)) {
    throw new Error("El lugar debe ser un string");
  }

  return LugarFromRequest;
};

export const isString = (string: string): boolean => {
  return typeof string === "string";
};
