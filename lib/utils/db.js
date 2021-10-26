import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
  host: 'localhost',
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: false,
    native: false
    // ssl: {
    //   require: process.env.REQUIRE_SSL || true,
    //   rejectUnauthorized: false
    // }
  },
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

sequelize.sync({ force: true });

export default sequelize;
