import { Model } from "sequelize";

import { FuncionariosInterface } from "../interfaces/types";

module.exports = (sequelize: any, DataTypes: any) => {
  class Funcionarios
    extends Model<FuncionariosInterface>
    implements FuncionariosInterface
  {
    funcionario_ID!: string;
    nombre_funcionario!: string;
    apellido_funcionario!: string;
    tipo_funcionario!: string;

    static associate(models: any) {
      Funcionarios.hasOne(models.Operadores, {
        foreignKey: "funcionario_ID",
        foreignKeyConstraint: true,
      });
    }
  }
  Funcionarios.init(
    {
      funcionario_ID: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
      nombre_funcionario: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      apellido_funcionario: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      tipo_funcionario: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      modelName: "Funcionarios",
    },
  );
  return Funcionarios;
};
