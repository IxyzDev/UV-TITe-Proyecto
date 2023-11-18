import db from "../../../models";

export const isPatrullero = async (
  patrulleroFromRequest: any
): Promise<string> => {
  const patrullero = await db.Patrulleros.findByPk(patrulleroFromRequest);
  if (patrullero.patrullero_ID !== patrulleroFromRequest) {
    throw new Error("Patrullero no encontrado");
  }
  return patrulleroFromRequest;
};

export const isMovil = async (movilFromRequest: any): Promise<string> => {
  const movil = await db.Movil.findByPk(movilFromRequest);
  if (movil.movil_ID !== movilFromRequest) {
    throw new Error("Movil no encontrado");
  }
  return movilFromRequest;
};

export const isString = (string: string): boolean => {
  return typeof string === "string";
};
