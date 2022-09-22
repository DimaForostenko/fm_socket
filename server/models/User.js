const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  login: {
    type: String,
    require: true
  },
  email: {
    type: String,
  },
  message: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message"
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;