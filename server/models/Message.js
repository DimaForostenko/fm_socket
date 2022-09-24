const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  context: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  timestamps: ""
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;