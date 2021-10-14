import Campaign from './Campaign.js';
import Npc from './Npc.js';
import User from './User.js';

// import Sequelize from 'sequelize';
// import db from '../utils/db.js';

User.hasMany(Campaign);
Campaign.belongsTo(User);

User.hasMany(Npc);
Npc.belongsTo(User);

//do npcs need to have knowledge of their campaign? And campaigns have knowledge of their npcs?
//or one or the other?
Campaign.hasMany(Npc);
Npc.hasMany(Campaign);

