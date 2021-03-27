import http from 'http';
import * as io from 'socket.io';

import registerMessageHandlers from './handlers/messageHandlers.js';
import registerUserHandlers from './handlers/userHandlers.js';

const server = http.createServer();

const PORT = 5000;

const socketIO = new io.Server(server, {
  cors: {
    origin: '*',
  },
});

const onConnection = (socket) => {
  console.log('User connected');

  const { roomId } = socket.handshake.query;
  socket.roomId = roomId;

  socket.join(roomId);

  registerMessageHandlers(socketIO, socket);
  registerUserHandlers(socketIO, socket);

  socket.on('disconnect', () => {
    console.log('User disconnect');
    socket.leave(roomId);
  });
};

socketIO.on('connection', onConnection);

server.listen(PORT, () => {
  console.log(`Server ready. Port: ${PORT}`);
});
