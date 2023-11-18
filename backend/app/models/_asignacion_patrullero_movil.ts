import { Model } from 'sequelize'

import { AsignacionPatrulleroMovilInterface } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
  class AsignacionPatrulleroMovil extends Model <AsignacionPatrulleroMovilInterface>
    implements AsignacionPatrulleroMovilInterface {
        asignacion_movil_ID!: string;
        patrullero_ID!: string;
        movil_ID!: string;

    static associate(models: any) {
      AsignacionPatrulleroMovil.belongsTo(models.Patrulleros, {
        foreignKey: 'patrullero_ID',
        foreignKeyConstraint: true
      }),
      AsignacionPatrulleroMovil.belongsTo(models.Movil, {
        foreignKey: 'movil_ID',
        foreignKeyConstraint: true
      })
      
    }

  }
  AsignacionPatrulleroMovil.init({
    asignacion_movil_ID: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    patrullero_ID: {
        allowNull: false,
        type: DataTypes.STRING,},
    movil_ID: {
        allowNull: false,
        type: DataTypes.STRING,}
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'AsignacionPatrulleroMovil'
  })
  return AsignacionPatrulleroMovil
}
