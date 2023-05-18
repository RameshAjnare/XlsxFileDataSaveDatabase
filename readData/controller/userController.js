const reader = require("xlsx");
const user_schema = require("../model/user_schema");
const test_report_schema = require("../model/test_report_schema");
const test_lab_boi_schema = require("../model/useLabBoi_schema");
const fs = require("fs");
const csv = require("fast-csv");

const userDataInsert = async (req, res) => {
  var userDataAll = [];
  fs.createReadStream("./uploads/hupe-life.csv")
    .pipe(csv.parse({ headers: true, maxRows: 89 }))
    .on("data", (data) => {
      try {
        userDataAll.push(data);
      } catch (err) {
        return res.status(500).json({
          status: false,
          message: err.message,
        });
      }
    })
    .on("end", async () => {
      const exitsUser = await user_schema.findOne({
        where: {
          email: userDataAll[0].email,
        },
      });

      //console.log("user exits===>", exitsUser);

      if (exitsUser != null) {
        return res.status(409).json({
          status: false,
          message: "User Email exits...",
        });
      } else {
        var userData = {
          First_Name: userDataAll[0].First_Name,
          email: userDataAll[0].email,
          DOB: userDataAll[0].DOB,
          Gender: userDataAll[0].Gender,
        };
        await user_schema.create(userData);

        //===========user basic info end ======

        const exitsUser1 = await user_schema.findOne({
          where: {
            email: userDataAll[0].email,
          },
        });
        if (exitsUser != 0) {
          var userDataTest = {
            Test_Date: userDataAll[0].Test_Date,
            Report_Date: userDataAll[0].Report_Date,
            userId: exitsUser1.id,
          };
          await test_report_schema.create(userDataTest);
        }

        //======= user test info end====
        const testReportExits = await test_report_schema.findOne({
          where: {
            userId: exitsUser1.id,
          },
        });

        if (
          userDataAll[0].email === exitsUser1.email &&
          exitsUser1.id === testReportExits.id
        ) {
         
          const allResult = [];
          for (const key in userDataAll) {
            var userDataResult = {
              Laboratory: userDataAll[key].Laboratory,
              Biomarker: userDataAll[key].Biomarker,
              Test_Type: userDataAll[key].Test_Type,
              Result: userDataAll[key][" Result "],
              Unit_UK: userDataAll[key].Unit_UK,
              userId: exitsUser1.id,
              testReportId: testReportExits.id,
            };
            allResult.push(userDataResult);
          }
          await test_lab_boi_schema.bulkCreate(allResult);
        }
        ///==== user result info end=====
        res.status(201).json({
          status: "success",
          message: "User data insert to databases successfully..",
          userData: userData,
        });
      }
    });
};

module.exports = {
  userDataInsert,
};
