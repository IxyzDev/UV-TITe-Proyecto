import { Model } from 'sequelize';
import { CompradorInterface } from '../interfaces/types';

module.exports = (sequelize: any, DataTypes: any) => {
  class Comprador extends Model<CompradorInterface>
    implements CompradorInterface {
    idComprador!: number;
    nombreComprador!: string;

    // 1: N Comprador : Prducto
    static associate (models: any) {
      Comprador.hasMany(models.Producto, {
        foreignKey: 'idComprador',
        foreignKeyConstraint: true
      })
    }
  }

  Comprador.init(
    {
      idComprador: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nombreComprador: {
        type: DataTypes.STRING, // Corregido el tipo a DataTypes.STRING
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      modelName: 'Comprador',
    }
  );

  return Comprador;
};
