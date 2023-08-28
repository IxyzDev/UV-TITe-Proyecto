import { Model } from 'sequelize'

import { TipoproductoInterface } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
class Tipoproducto extends Model<TipoproductoInterface>
  implements TipoproductoInterface {
    idTipoProducto!: number
    descripcionProducto!: string

    // 1:N Tipoproducto : Producto
    static associate (models: any) {
      Tipoproducto.hasMany(models.Producto, {
        foreignKey: 'idTipoProducto',
        foreignKeyConstraint: true
      })
    }

}
Tipoproducto.init({
  idTipoProducto: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  descripcionProducto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  modelName: 'Tipoproducto',
  })
  return Tipoproducto
}
