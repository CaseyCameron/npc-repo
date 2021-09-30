import Sequelize from 'sequelize';
import db from '../utils/db.js';

class User extends Sequelize.Model { }

User.init(
  {
    email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: 'User'
  }
);

export default User;
