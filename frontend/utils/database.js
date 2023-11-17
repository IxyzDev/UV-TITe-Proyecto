const { Sequelize } = require('sequelize');

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize('nombre_de_tu_base_de_datos', 'tu_usuario', 'tu_contraseña', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Puedes activar los logs de Sequelize pasando console.log
});

// Exportar la instancia de Sequelize
module.exports = sequelize;
