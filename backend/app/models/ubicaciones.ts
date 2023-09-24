import { Model } from 'sequelize'

import { UbicacionInterface } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
  class Ubicacion extends Model <UbicacionInterface>
    implements UbicacionInterface {
        ubicacion_ID!: string;
        sector_ID!: string;
        direccion!: string;
        coordenadas!: string;
        n_domicilio!: string;
        lugar!: string;

  }
  Ubicacion.init({
    ubicacion_ID: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    sector_ID: {
        allowNull: false,
        type: DataTypes.STRING
    },
    direccion: {
        allowNull: false,
        type: DataTypes.STRING
    },
    coordenadas: {
        allowNull: false,
        type: DataTypes.STRING
    },
    n_domicilio: {
        allowNull: false,
        type: DataTypes.STRING
    },
    lugar: {
        allowNull: false,
        type: DataTypes.STRING
    },
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'Ubicacion'
  })
  return Ubicacion
}
