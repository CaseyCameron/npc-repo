import Sequelize from 'sequelize';
import db from '../utils/db.js';

class Campaigns extends Sequelize.Model { }

Campaigns.init(
  {
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.DataTypes.STRING(1024)
    },
    image: {
      type: Sequelize.DataTypes.STRING,
    },
    gameMaster: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    }
  }
);