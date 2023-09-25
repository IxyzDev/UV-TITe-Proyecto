import { Model } from 'sequelize'

import { MovilesInterface } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
  class Movil extends Model <MovilesInterface>
    implements MovilesInterface {
        matricula_ID!: string;
  }
  Movil.init({
    matricula_ID: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'Movil'
  })
  return Movil
}
