const dataAccess = require('./DataAccess/DataAccess').dataAccess;

const Customers = dataAccess.connection.define('customers', {
    firstName: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    lastName: {
      type: Sequelize.STRING
    },
    company_ID: {
      type: Sequelize.INTEGER
    },
    email: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    phone: {
      type: Sequelize.INTEGER
    },
    comments: {
      type: Sequelize.STRING
    },
  },{
    freezeTableName:true
  });

  module.exports = {Customers}