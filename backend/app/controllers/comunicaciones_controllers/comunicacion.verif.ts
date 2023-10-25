export const parseMedioComunicacion = (MedioComunicacionFromRequest: any): string => {
  if (!isString(MedioComunicacionFromRequest)) {
    throw new Error('El medio de comunicacion debe ser un string');
  }
  
  return MedioComunicacionFromRequest;
}

export const parseNombreContribuyente = (NombreContribuyenteFromRequest: any): string => {
  if (!isString(NombreContribuyenteFromRequest)) {
    throw new Error('El nombre del contribuyente debe ser un string');
  }
  
  return NombreContribuyenteFromRequest;
}

export const parseTelefono = (TelefonoFromRequest: any): string => {
  if (!isString(TelefonoFromRequest)) {
    throw new Error('El el telefono debe ser un string');
  }
  
  return TelefonoFromRequest;
}

export const isString = (string: string): boolean => {
  return typeof string === 'string'
}