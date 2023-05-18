const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/blogdb', {useNewUrlParser : true})

const con = mongoose.connection;
con.once('open', (req, res)=> {
    console.log('Connection established successfully with db')
})

//sudo service mongod restart