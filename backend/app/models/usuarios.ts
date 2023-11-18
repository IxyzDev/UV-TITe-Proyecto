import { Model } from "sequelize";

import { UsuarioInterface } from "../interfaces/types";

module.exports = (sequelize: any, DataTypes: any) => {
  class Usuario extends Model<UsuarioInterface> implements UsuarioInterface {
    user_ID!: string;
    nombre!: string;
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
      user_ID: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
      nombre: {
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
    }
  );
  return Usuario;
};
