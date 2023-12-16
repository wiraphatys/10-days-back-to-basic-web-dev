const { Sequelize, DataTypes } = require('sequelize');
const pg = require('../connect');

const EmployeeModel = pg.define('employee', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(255)
    },
    phone: {
        type: DataTypes.STRING(10)
    },
    email: {
        type: DataTypes.STRING(255)
    }
})

EmployeeModel.sync({alter:true});

module.exports = EmployeeModel;