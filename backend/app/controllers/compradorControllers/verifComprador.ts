export const parseNombreComprador = (NombreCompradorFromRequest: any): string => {
  if (!isString(NombreCompradorFromRequest)) {
    throw new Error('Error en el nombre del comprador')
  }
  return NombreCompradorFromRequest
}

export const isString = (string: string): boolean => {
  return typeof string === 'string'
}
