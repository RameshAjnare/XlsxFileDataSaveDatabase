const Sequelize = require("sequelize");
const sequelize = require("./configDB");
const TestReport = require("./test_report_schema");


const UserLabBoi = sequelize.define("userLabBoi", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  Laboratory: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Biomarker: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Test_Type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Result: {
    type: Sequelize.STRING,
  },
  Unit_UK: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: "new_users",
      key: "id",
    },
  },
  testReportId: {
    type: Sequelize.INTEGER,
    references: {
      model: "user_report_tests",
      key: "id",
    },
  },
});
TestReport.hasMany(UserLabBoi);

(async () => {
  await sequelize.sync();
})();

module.exports = UserLabBoi;
