import { Model } from 'sequelize'

import { PatrullerosInterface } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
  class Patrulleros extends Model <PatrullerosInterface>
    implements PatrullerosInterface {
        patrullero_ID!: string;
        funcionario_ID!: string;

    static associate(models: any) {
      Patrulleros.belongsTo(models.Funcionarios, {
        foreignKey: 'funcionario_ID',
        foreignKeyConstraint: true
      })
    }
  }
  Patrulleros.init({
    patrullero_ID: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    funcionario_ID: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      }
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'Patrulleros'
  })
  return Patrulleros
}
