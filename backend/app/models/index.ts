import * as fs from "fs";
import * as path from "path";
import { Sequelize, DataTypes } from "sequelize";

// import * as dotenv from "dotenv";
// dotenv.config();

const basename = path.basename(__filename);
const db: any = {};

const username = process.env.PRODUCTION_DB_USERNAME;
const password = process.env.PRODUCTION_DB_PASSWORD;
const host = process.env.PRODUCTION_DB_HOST;
console.log(host, username, password)

const sequelize = new Sequelize({
  username,
  password,
  host,
  dialect: "mysql"
});

//console.log(sequelize);

//console.log("Todos los archivos en el directorio:", fs.readdirSync(__dirname));

const modelFiles = fs.readdirSync(__dirname).filter((file: string) => {
  return (
    file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
  );
});
//console.log("Archivos de modelo filtrados:", modelFiles);

const delay = 5000; // Retraso en milisegundos (5000 ms = 5 segundos)
setTimeout(() => {
  sequelize.authenticate()
    .then(() => {
      console.log('Conexión exitosa.');
    })
    .catch(err => {
      console.error('Error al conectarse a la base de datos:', err);
    });
}, delay);

modelFiles.forEach((file: any) => {
  if (!file.startsWith("_")) {
    // Verifica si el archivo no comienza con "_"
    //console.log(`Importando modelo desde el archivo: ${file}`);
    const modelModule = require(path.join(__dirname, file));
    const model = modelModule.default
      ? modelModule.default(sequelize, DataTypes)
      : modelModule(sequelize, DataTypes);
    //console.log(`Modelo importado: ${model.name}`);
    db[model.name] = model;
  }
});


Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
