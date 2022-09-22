const http = require('http');
const SocketServer = require('socket.io');
const app = require('./app');
const { port, SOCKET_EVENTS } = require('./configs');
const { Message } = require('./models/Message');

const PORT = process.env.PORT || port;
const server = http.createServer(app);
const cors = {
  origin: "http://localhost:3000",
};
const io = SocketServer(server, { cors });

io.on('connection', (socket) => {
  console.log("socket connect -", socket);
  socket.on(SOCKET_EVENTS, async (newMessage) => {
    try {
      const saveMessage = await Message.create(newMessage);
      io.emit(SOCKET_EVENTS.NEW_MESSAGE, saveMessage);
    } catch (error) {
      socket.emit(SOCKET_EVENTS.NEW_MESSAGE_ERROR, error)
    }
  });
  socket.on("disconnect", (reason) => {
    console.log("socket disconnect - reason -", reason);
  });
});

server.listen(PORT, () => {
  console.log("server start at port = " + PORT);
});