const express = require('express')
const routers = express.Router()
const uploads = require('../middle_ware/file_handle')
const userController = require('../controller/userController')

//Upload route
routers.post("/uploadfile", uploads.single("myFile"),
userController.userDataInsert);

module.exports = routers