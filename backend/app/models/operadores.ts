import { Model } from 'sequelize'

import { OperadoresInterface } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
  class Operadores extends Model <OperadoresInterface>
    implements OperadoresInterface {
        operador_ID!: string;
        funcionario_ID!: string;

  }
  Operadores.init({
    operador_ID: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING,   
    },
    funcionario_ID: {
        allowNull: false,
        type: DataTypes.STRING}
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'Operadores'
  })
  return Operadores
}
