import { Model } from 'sequelize'

import { ReportesInterface } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
  class Reportes extends Model <ReportesInterface>
    implements ReportesInterface {
        reporte_ID!: string;
        ubicacion_ID!: string;
        comunicacion_ID!: string;
        operador_ID!: string;
        fecha_y_hora!: string;
        detalle!: string;
        caso!: string;
        observaciones!: string;
        motivo!: string;
        grupo_delictual!: string;
        derivado!: string;

    static associate(models: any) {
      Reportes.hasOne(models.AsignacionPatrulleroReporte, {
        foreignKey: 'reporte_ID',
        foreignKeyConstraint: true
      }),
      Reportes.belongsTo(models.Operadores, {
        foreignKey: 'operador_ID',
        foreignKeyConstraint: true 
    }),
      Reportes.belongsTo(models.Ubicacion, {
        foreignKey: 'ubicacion_ID',
        foreignKeyConstraint: true 
    }),
    Reportes.belongsTo(models.Comunicacion, {
        foreignKey: 'comunicacion_ID',
        foreignKeyConstraint: true 
    })
    }
  }
  Reportes.init({
    reporte_ID: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    ubicacion_ID: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    comunicacion_ID: {
        allowNull: false,
        type: DataTypes.STRING
    },
    operador_ID: {
        allowNull: false,
        type: DataTypes.STRING
    },
    fecha_y_hora: {
        allowNull: false,
        type: DataTypes.STRING
    },
    detalle: {
        allowNull: false,
        type: DataTypes.STRING
    },
    
    observaciones: {
        allowNull: false,
        type: DataTypes.STRING
    },
    motivo: {
        allowNull: false,
        type: DataTypes.STRING
    },
    grupo_delictual: {
        allowNull: true,
        type: DataTypes.STRING
    },
    derivado: {
        allowNull: true,
        type: DataTypes.STRING
    },
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'Reportes'
  })
  return Reportes
}
