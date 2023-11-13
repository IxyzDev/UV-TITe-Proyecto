import { Sequelize } from "sequelize";
let isConnected = false; // Variable para saber si la conexión está establecida

export const sequelize = async () => {
  if (isConnected) {
    console.log("=> Usando la conexión existente");
    return;
  }

  try {
    const sequelize = new Sequelize(
      process.env.PRODUCTION_DB_USERNAME,
      process.env.PRODUCTION_DB_PASSWORD,
      process.env.PRODUCTION_DB_HOST,
      {
        database: "test",
        dialect: "mysql",
      }
    );
    await sequelize.authenticate();
    isConnected = true;
  } catch (error) {
    console.log("=> Error al conectar a la base de datos:", error);
  }
};
