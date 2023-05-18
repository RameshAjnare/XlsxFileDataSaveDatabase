const Sequelize = require('sequelize');
const sequelize = require('./configDB');

const User = sequelize.define('new_user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    First_Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Gender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    DOB: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

(async () => {
    await sequelize.sync();
  })();

module.exports = User;