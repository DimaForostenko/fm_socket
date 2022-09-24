const express = require('express');
const cors = require("cors");
const {Message, User} = require('./models/Message');

const app = express();

app.use(cors());
app.use(express.json());

app.post("/users", async (req, res, next) => {
  try {
    const { body } = req;
    const user = await User.create(body);
    res.status(201).send({ data: user });
  } catch (error) {
    next(error)
  }
})

app.get('/', async (req, res, next) => {
  try {
    const messages = await Message.find({}, null, {
      sort: { createAt: -1 },
      limit: 5
    });
    res.status(200).send({ data: messages });
  } catch (error) {
    next(error);
  }
})

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
})

module.exports = app;
