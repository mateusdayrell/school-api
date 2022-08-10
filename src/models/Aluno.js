import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: false,
        len: {
          args: [3, 255],
          msg: 'O nome deve ter entre 3 e 255 caracteres',
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: false,
        len: {
          args: [3, 255],
          msg: 'O sobrenome deve ter entre 3 e 255 caracteres',
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: false,
        isEmail: {
          msg: 'E-mail inválido',
        },
      },
      telefone: {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: false,
        len: {
          args: [10, 11],
          msg: 'O sobrenome deve ter entre 10 e 11 caracteres',
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        allowNull: false,
        validate: {
          isInt: {
            msg: 'A idade deve ser um valor inteiro',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        allowNull: false,
        validate: {
          isFloat: {
            msg: 'O peso deve ser um valor inteiro ou float',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        allowNull: false,
        validate: {
          isFloat: {
            msg: 'A altura deve ser um valor inteiro ou float',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
