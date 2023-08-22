const express=require('express')
const serverConfig=require('./configs/server.config');
const mongoose=require('mongoose');
const dbConfig=require('./configs/db.config');
const userModel=require('./models/User.model');

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
    init();
})

async function init(){
    /**
     * Initialize the mongoDB
     * 
     * Need to create Admin User
     */

    /**
     * 
     * check the admin user is already present ot not 
     */
        let admin=await userModel.findOne({
            userId:"admin"
        })

        if(admin){
            console.log("Admin User Aready Present");
            return;
        }

        admin= await userModel.create({
        name:"Lokesh Kumar",
        userId:"admin",
        email:"lokeshkmr30697@gmail.com",
        userType:"ADMIN",
        password:"Welcome@2020"
    })
    console.log(admin)

}




app.listen(serverConfig.PORT,()=>{
    console.log(`Server Started with PORT No. ${serverConfig.PORT}`)
})