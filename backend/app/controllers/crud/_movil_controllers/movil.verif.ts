
export const parseMatricula = (MatriculaFromRequest: any): string => {
  if (!isString(MatriculaFromRequest)) {
    throw new Error('El tipo de la matricula debe ser un string');
  }
  
  if (!isMatriculaChilena(MatriculaFromRequest)) {
    throw new Error('La matricula no es valida');
  }
  
  return MatriculaFromRequest;
}

export const isString = (string: string): boolean => {
  return typeof string === 'string'
}

function isMatriculaChilena(matricula: string): boolean {
  const formatoAntiguo = /^[A-Z]{2}\d{4}$/i;
  const formatoNuevo = /^[A-Z]{4}\d{2}$/i;
  const formatoCamionesYRemolques = /^[A-Z]\d{4}[A-Z]$/i;

  return formatoAntiguo.test(matricula) || formatoNuevo.test(matricula) || formatoCamionesYRemolques.test(matricula);
}