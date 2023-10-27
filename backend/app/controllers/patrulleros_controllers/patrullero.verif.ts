import db from '../../models'; 

export const isFuncionario = async (funcionarioFromRequest: any): Promise<string>=> {
    try {
        const funcionario = await db.Funcionario.findByPk(funcionarioFromRequest);
    if (funcionario.funcionario_ID !== funcionarioFromRequest) {
        throw new Error("Funcionario no encontrado");
    }
    } catch (error: any) {
        throw new Error("Funcionario no encontrado");
    }
  return funcionarioFromRequest
}

export const isString = (string: string): boolean => {
  return typeof string === 'string'
}