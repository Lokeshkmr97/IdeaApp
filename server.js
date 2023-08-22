const express=require('express')
const serverConfig=require('./configs/server.config');
const mongoose=require('mongoose');
const dbConfig=require('./configs/db.config');

const app=express()


/**
 * Logic to connect to Mongoose and create an ADMIN user.
 * 
 * Need to have the mongodb up and running in your local machine
 */

// mongoose.connect("mongoURL");

mongoose.connect(dbConfig.DB_URL);
const db=mongoose.connection;

db.on("error",()=>{
    console.log("Error while connecting to DB");
});

db.once("open",()=>{
    console.log("DB is Connected");
})




app.listen(serverConfig.PORT,()=>{
    console.log(`Server Started with PORT No. ${serverConfig.PORT}`)
})