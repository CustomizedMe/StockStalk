const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  gender: {
    type: String,
  },
  company: {
    type: String,
    //required: true,
  },
  designation: {
    type: String,
    //required: true,
  },
  about: {
    type: String,
    //required: true,
  },
  picture: {
    type: String,
  },
  social: {
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
  },
  regdate: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Profile = mongoose.model("profile", ProfileSchema);
