export const parseFuncionarioID = (FuncionarioIDFromRequest: any): string => {
  if (!isString(FuncionarioIDFromRequest)) {
    throw new Error('El ID del funcionario debe ser un string')
  }
  return FuncionarioIDFromRequest
}

export const parseNombreFuncionario = (NombreFuncionarioFromRequest: any): string => {
  if (!isString(NombreFuncionarioFromRequest)) {
    throw new Error('El nombre del funcionario debe ser un string')
  }
  return NombreFuncionarioFromRequest
}

export const parseApellidoFuncionario = (ApellidoFuncionarioFromRequest: any): string => {
  if (!isString(ApellidoFuncionarioFromRequest)) {
    throw new Error('El apellido del funcionario debe ser un string')
  }
  return ApellidoFuncionarioFromRequest
}

export const parseTipoFuncionario = (TipoFuncionarioFromRequest: any): string => {
  if (!isString(TipoFuncionarioFromRequest)) {
    throw new Error('El tipo del funcionario debe ser un string');
  }
  
  if (!validateTipoFuncionario(TipoFuncionarioFromRequest)) {
    throw new Error('El tipo del funcionario no es válido');
  }
  
  return TipoFuncionarioFromRequest;
}

export const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const validateTipoFuncionario = (tipoFuncionario: string): boolean => {
  const TipoFuncionarioUpperCase = tipoFuncionario.toUpperCase()
  if (TipoFuncionarioUpperCase  !== 'OPERADOR' && TipoFuncionarioUpperCase  !== 'PATRULLERO') {
    throw new Error('El tipo del funcionario no es válido');
  }
  return true;
};