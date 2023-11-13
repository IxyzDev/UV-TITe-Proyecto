import db from "../../../models";

export const isFuncionario = async (
  funcionarioFromRequest: any
): Promise<string> => {
  try {
    console.log(funcionarioFromRequest);
    await db.Funcionarios.findOne({
      where: { funcionario_ID: funcionarioFromRequest },
    });
  } catch (error: any) {
    throw new Error("Funcionario no encontrado");
  }
  return funcionarioFromRequest;
};

export const isString = (string: string): boolean => {
  return typeof string === "string";
};
