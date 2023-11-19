import { Model } from "sequelize";

import { MovilInterface } from "../../interfaces/types";

module.exports = (sequelize: any, DataTypes: any) => {
  class Movil extends Model<MovilInterface> implements MovilInterface {
    movil_ID!: string;
    matricula!: string;
  }
  Movil.init(
    {
      movil_ID: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
      matricula: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      modelName: "Movil",
    },
  );
  return Movil;
};
