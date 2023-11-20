import { Model } from "sequelize";

import { UsuarioInterface } from "../interfaces/types";

module.exports = (sequelize: any, DataTypes: any) => {
  class Usuario extends Model<UsuarioInterface> implements UsuarioInterface {
    nombre_usuario!: string;
    nombre_personal!: string;
    contrasena!: string;
    admin!: boolean;

    static associate(models: any) {
      Usuario.hasOne(models.Reportes, {
        foreignKey: "reporte_ID",
        foreignKeyConstraint: true,
      });
    }
  }
  Usuario.init(
    {
      nombre_usuario: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
      nombre_personal: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      contrasena: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      admin: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      modelName: "Usuarios",
    },
  );
  return Usuario;
};
