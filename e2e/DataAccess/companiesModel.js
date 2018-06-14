const dataAccess = require('./DataAccess').dataAccess;
var Sequelize=require('sequelize');

const Companies = dataAccess.connection.define('companies', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    },
  },{
    freezeTableName:true
  });

  module.exports = {Companies}