const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/faceprep?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to MOngo Successfullly");
    })
}

module.exports = connectToMongo;
