import Sequelize from 'sequelize';
import db from '../utils/db.js';

class Users extends Sequelize.Model { }

Users.init(
  {
    email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    }
  }
);