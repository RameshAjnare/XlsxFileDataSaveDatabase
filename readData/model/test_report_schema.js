const Sequelize = require('sequelize');
const sequelize = require('./configDB');
const User =  require('./user_schema')

const TestReportDate = sequelize.define('user_report_test', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Test_Date: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Report_Date: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    userId: {
        type: Sequelize.INTEGER,
        references: {
           model: 'new_users', 
           key: 'id', 
        }
    }

});
User.hasMany(TestReportDate);

(async () => {
    await sequelize.sync();
  })();

module.exports = TestReportDate;