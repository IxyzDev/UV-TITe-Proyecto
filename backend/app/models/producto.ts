import { Model } from 'sequelize'
import { ProductInterface } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
  class Producto extends Model<ProductInterface> implements ProductInterface {
    numeroVendedor!: number
    idComprador!: number
    idTipoProducto!: number
    precioCompra!: number

    // N: 1 Producto : Vendedor
    static associate(models: any) {
      Producto.belongsTo(models.Vendedor, {
        foreignKey: 'numeroVendedor',
        foreignKeyConstraint: true
      }),
      Producto.belongsTo(models.Tipoproducto, {
        foreignKey: 'idTipoProducto',
        foreignKeyConstraint: true
      }),
      Producto.belongsTo(models.Comprador, {
        foreignKey: 'idComprador',
        foreignKeyConstraint: true
      })
    }
  }

  Producto.init({
    numeroVendedor: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Vendedor',
        key: 'numeroVendedor'
      }
    },
    idComprador: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Comprador',
        key: 'idComprador'
      }
    },
    idTipoProducto: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Tipoproducto',
        key: 'idTipoproducto'
      }
    },
    precioCompra: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'Producto'
  })

  Producto.removeAttribute('id');
  
  return Producto
}
