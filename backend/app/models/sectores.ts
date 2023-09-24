import { Model } from 'sequelize'

import { SectorInterface } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
  class Sector extends Model <SectorInterface>
    implements SectorInterface {
        sector_ID!: string;
        nombre_sector!: string;
        unidad_vecinal!: string;

  }
  Sector.init({
    sector_ID: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    nombre_sector: {
        allowNull: false,
        type: DataTypes.STRING
    },
    unidad_vecinal: {
        allowNull: false,
        type: DataTypes.STRING
    },
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'Sector'
  })
  return Sector
}
