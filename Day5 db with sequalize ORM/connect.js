const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('10-day-web-dev-db', 'banky', '123456', {
  host: 'localhost',
  port: 4000,
  dialect: 'postgres',
  logging: false
});

module.exports = sequelize;