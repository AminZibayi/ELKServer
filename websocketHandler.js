const WebSocket = require('ws');
const { handleData } = require('./dataHandler');

const handleWebsocketConnection = (server) => {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    console.log('New client connected');

    ws.on('message', (message) => {
      console.log('Received: %s', message);
      const data = JSON.parse(message);
      handleData(data);
    });

    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });
};

module.exports = { handleWebsocketConnection };