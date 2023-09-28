import * as fs from 'fs';
import * as path from 'path';
import { Sequelize, DataTypes } from 'sequelize';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'zarate';
const config = require(__dirname + '/../config/db.config')[env];
const db: any = {};

let sequelize: Sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]!, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

console.log('Todos los archivos en el directorio:', fs.readdirSync(__dirname));

const modelFiles = fs.readdirSync(__dirname).filter((file: string) => {
  return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts');
});
console.log('Archivos de modelo filtrados:', modelFiles);

modelFiles.forEach((file: any) => {
  console.log(`Importando modelo desde el archivo: ${file}`);
  const modelModule = require(path.join(__dirname, file));
  const model = modelModule.default ? modelModule.default(sequelize, DataTypes) : modelModule(sequelize, DataTypes);
  console.log(`Modelo importado: ${model.name}`);
  db[model.name] = model;
});

console.log('Modelos importados:', Object.keys(db));

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
