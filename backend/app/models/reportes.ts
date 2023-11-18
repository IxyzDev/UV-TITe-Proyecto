import { Model } from "sequelize";

import { ReportesInterface } from "../interfaces/types";

module.exports = (sequelize: any, DataTypes: any) => {
  class Reportes extends Model<ReportesInterface> implements ReportesInterface {
    reporte_ID!: string;
    ubicacion_ID!: string;
    comunicacion_ID!: string;
    user_ID!: string;
    fecha_y_hora_envio!: string;
    hora_evento!: string;
    motivo_detalle!: string;
    observaciones!: string;
    grupo_delictual!: string;
    derivado!: string;
    num_movil!: number;

    static associate(models: any) {
      // Reportes.hasOne(models.AsignacionPatrulleroReporte, {
      //   foreignKey: "reporte_ID",
      //   foreignKeyConstraint: true,
      // }),
      // Reportes.belongsTo(models.Operadores, {
      //   foreignKey: "operador_ID",
      //   foreignKeyConstraint: true,
      // }),
      Reportes.belongsTo(models.Usuarios, {
        foreignKey: "user_ID",
        foreignKeyConstraint: true,
      }),
        Reportes.belongsTo(models.Ubicacion, {
          foreignKey: "ubicacion_ID",
          foreignKeyConstraint: true,
        }),
        Reportes.belongsTo(models.Comunicacion, {
          foreignKey: "comunicacion_ID",
          foreignKeyConstraint: true,
        });
    }
  }
  Reportes.init(
    {
      reporte_ID: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
      ubicacion_ID: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      comunicacion_ID: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      user_ID: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      fecha_y_hora_envio: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      hora_evento: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      motivo_detalle: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      observaciones: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      grupo_delictual: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      derivado: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      num_movil: {
        allowNull: false,
        type: DataTypes.NUMBER,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      modelName: "Reportes",
    }
  );
  return Reportes;
};
