export const parseDescripcionProducto = (DescripcionProductoFromRequest: any): string => {
  if (!isString(DescripcionProductoFromRequest)) {
    throw new Error('Eror en la descripcion producto')
  }
  return DescripcionProductoFromRequest
}

export const isString = (string: string): boolean => {
  return typeof string === 'string'
}
