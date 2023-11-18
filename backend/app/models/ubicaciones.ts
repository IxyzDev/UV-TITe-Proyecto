import { Model } from "sequelize";

import { UbicacionInterface } from "../interfaces/types";

module.exports = (sequelize: any, DataTypes: any) => {
  class Ubicacion
    extends Model<UbicacionInterface>
    implements UbicacionInterface
  {
    ubicacion_ID!: string;
    subsector_ID!: string;
    direccion!: string;
    coordenadas!: string;

    static associate(models: any) {
      Ubicacion.hasMany(models.Reportes, {
        foreignKey: "ubicacion_ID",
        foreignKeyConstraint: true,
      });
      Ubicacion.hasOne(models.SubSector, {
        foreignKey: "subsector_ID",
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
      subsector_ID: {
        allowNull: true,
        type: DataTypes.STRING,
        unique: true,
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
    }
  );
  return Ubicacion;
};
