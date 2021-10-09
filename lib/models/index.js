import Campaign from './Campaign.js';
import Npc from './Npc.js';
import User from './User.js';

// import Sequelize from 'sequelize';
// import db from '../utils/db.js';

User.hasMany(Campaign);
Campaign.belongsTo(User);

Campaign.hasMany(Npc);
Npc.belongsTo(Campaign);
