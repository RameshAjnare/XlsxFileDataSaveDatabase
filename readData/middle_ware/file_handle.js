const express = require('express')
const app = express()
const path = require("path");
const multer = require("multer");


app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

//server.js
// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null,"hupe-life.csv");
  },
});

const fileFilter = (req,file, cb) => {
  if (file.mimetype === 'text/csv') {
    cb(null, true);
  } else {
    return req.res.json({
      status : false,
      Error : "File format should  be CSV type"
    })
    //cb(new Error("File format should  be CSV type"), false); // if validation failed then generate error
  }
};
 


var upload = multer({ storage: storage, fileFilter : fileFilter });

module.exports = upload
