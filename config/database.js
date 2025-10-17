const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'postgresql://neondb_owner:npg_CfTMwv8GtYj2@ep-lingering-bird-afcua30y-pooler.c-2.us-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  {
    dialect: 'postgres',
    logging: false, // Set true kalau mau lihat log query
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

module.exports = sequelize;