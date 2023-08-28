import db from '../../models'

const comprador = db.Comprador
const tipoproducto = db.Tipoproducto;
const vendedor = db.Vendedor

export const parseNumeroVendedor = async (NumeroVendedorFromRequest: any): Promise<number> => {
  try {
    const record = await vendedor.findByPk(NumeroVendedorFromRequest);

    if (record && isNumber(NumeroVendedorFromRequest)) {
      // El registro con el PK especificado existe en la tabla
      return NumeroVendedorFromRequest;
    } else {
      // El registro con el PK especificado no existe en la tabla
      return Promise.reject(new Error('El PK del numero vendedor no existe'));
    }
  } catch (error) {
    // Error al buscar en la tabla
    return Promise.reject(new Error('Error al buscar en la tabla de vendedores'));
  }
};


export const parseIdComprador = async (IdCompradorFromRequest: any): Promise<number> => {
  try {
    const record = await comprador.findByPk(IdCompradorFromRequest)

    if (record && isNumber(IdCompradorFromRequest)) {
      // El registro con el PK especificado existe en la tabla
      return IdCompradorFromRequest
    } else {
      // El registro con el PK especificado no existe en la tabla
      return Promise.reject(new Error('El PK del id del comprador no existe'));
  }
  } catch (error) {
    // Error al buscar en la tabla
    return Promise.reject(new Error('Error al buscar en la tabla de compradores'));
  }
}

export const parseIdTipoProducto = async (IdTipoProductoFromRequest: any): Promise<number> => {
  try {
    const record = await tipoproducto.findByPk(IdTipoProductoFromRequest)

    if (record && isNumber(IdTipoProductoFromRequest)) {
      // El registro con el PK especificado existe en la tabla
      return IdTipoProductoFromRequest
    } else {
      // El registro con el PK especificado no existe en la tabla
      return Promise.reject(new Error('El PK de id del tipo producto, no existe'));
    }
  } catch (error) {
    // Error al buscar en la tabla
    return Promise.reject(new Error('Error al buscar en la tabla tipo producto' ));
  }
}

export const parsePrecioCompra = (PrecioCompraFromRequest: any): number => {
  if (!isNumber(PrecioCompraFromRequest)) {
    throw new Error('El precio de la compra no es correcto')
  }
  return PrecioCompraFromRequest
}

export const isNumber = (number: any): boolean => {
  return typeof number === 'number'
}

