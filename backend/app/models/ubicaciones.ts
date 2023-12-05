import { Model } from "sequelize";

import { UbicacionInterface } from "../interfaces/types";

module.exports = (sequelize: any, DataTypes: any) => {
  class Ubicacion extends Model<UbicacionInterface> implements UbicacionInterface {
    ubicacion_ID!: string;
    direccion!: string;
    coordenadas!: string;

    static associate(models: any) {
      Ubicacion.hasMany(models.Reportes, {
        foreignKey: "ubicacion_ID",
        foreignKeyConstraint: true,
      });
    }
  }

  Ubicacion.init(
    {
      ubicacion_ID: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
      direccion: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      coordenadas: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      modelName: "Ubicacion",
    },
  );
  return Ubicacion;
};
