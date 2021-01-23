<<<<<<< HEAD
const mongoose =  require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async() => {
    try {
        await mongoose.connect(db,{
            useNewUrlParser : true,
            useUnifiedTopology: true,
            useCreateIndex : true,
            useFindAndModify: false
        });
        console.log('MongoDB Connected...');

    } catch(err){
        console.error(err.message);
        //Exit
        process.exit(1);
    }
}
=======
const mongoose = require("mongoose");
const config = require("config");
// require("dotenv").config();
// const db = process.env.mongoURI;
const db = config.get('mongoURI');
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
>>>>>>> 3f8aaba59c3e9708e7caac83d22b12cb63a98798
module.exports = connectDB;
