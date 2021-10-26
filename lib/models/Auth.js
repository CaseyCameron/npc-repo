import Sequelize from 'sequelize';
import db from '../utils/db.js';

class Auth extends Sequelize.Model { }

Auth.init(
  {
    email: Sequelize.DataTypes.STRING,
    allowNull: false
  },
  {
    passwordHash: Sequelize.DataTypes.STRING,
    allowNull: false
  },
  {
    timestamps: false,
    sequelize: db, 
    moduleName: 'User'
  }
);

export default Auth;
