const mongoose = require('mongoose');

mongoose.connect(process.env.mongoURL);

const db = mongoose.connection;

db.on('error',console.error.bind(console, "Error connecting to MongoDB"));

db.once('open',()=>{
    console.log('Connection successFull to DataBase');
})