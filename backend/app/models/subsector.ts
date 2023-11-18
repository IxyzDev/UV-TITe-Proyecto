import { Model } from "sequelize";

import { SubSectorInterface } from "../interfaces/types";

module.exports = (sequelize: any, DataTypes: any) => {
  class SubSector
    extends Model<SubSectorInterface>
    implements SubSectorInterface
  {
    subsector_ID!: string;
    nombre_subsector!: string;
    sector_ID!: string;

    static associate(models: any) {
      SubSector.hasMany(models.Sector, {
        foreignKey: "sector_ID",
        foreignKeyConstraint: true,
      });
    }
  }
  SubSector.init(
    {
      subsector_ID: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
      nombre_subsector: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      sector_ID: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      modelName: "SubSector",
    }
  );
  return SubSector;
};
