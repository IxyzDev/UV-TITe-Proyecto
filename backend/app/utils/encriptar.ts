import bcrypt from "bcrypt";

const saltRounds = 10;

export const hashValue = async (password: string): Promise<string> => {
  return bcrypt.hash(password, saltRounds);
};

export const checkValue = async (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};

// // Ejemplo de uso
// const password = "mi_contraseña_segura";

// const runExample = async () => {
//   const hashedValue = await hashValue(password);

//   // Más tarde, para verificar...
//   const isMatch = await checkValue("mi_contraseña_segura", hashedValue);
//   console.log("La contraseña coincide:", isMatch);
// };

// runExample();
