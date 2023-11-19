import { Model } from "sequelize";

import { AsignacionPatrulleroReporteInterface } from "../interfaces/types";

module.exports = (sequelize: any, DataTypes: any) => {
  class AsignacionPatrulleroReporte
    extends Model<AsignacionPatrulleroReporteInterface>
    implements AsignacionPatrulleroReporteInterface
  {
    asignacion_reporte_ID!: string;
    patrullero_ID!: string;
    reporte_ID!: string;

    static associate(models: any) {
      AsignacionPatrulleroReporte.belongsTo(models.Patrulleros, {
        foreignKey: "patrullero_ID",
        foreignKeyConstraint: true,
      });
    }
  }
  AsignacionPatrulleroReporte.init(
    {
      asignacion_reporte_ID: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
      patrullero_ID: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      reporte_ID: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      modelName: "AsignacionPatrulleroReporte",
    },
  );
  return AsignacionPatrulleroReporte;
};
