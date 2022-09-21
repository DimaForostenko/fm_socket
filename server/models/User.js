const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  text:{
    type:String,
    require:true
  },
  user:{
    type:String,
    ref:"Message",
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;