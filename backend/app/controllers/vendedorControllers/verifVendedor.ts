export const parseNombreVendedor = (nombreVendedorFromRequest: any): string => {
  if (!isString(nombreVendedorFromRequest)) {
    throw new Error('Error al ingresar nombre vendedor')
  }
  return nombreVendedorFromRequest
}

export const isString = (string: string): boolean => {
  return typeof string === 'string'
}

