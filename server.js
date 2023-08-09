const http = require('http');
const WebSocket = require('ws');
const express = require('express');
const { handleData } = require('./dataHandler');
const { handleWebsocket } = require('./websocketHandler');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
  ws.on('message', message => {
    const data = JSON.parse(message);
    handleData(data);
    handleWebsocket(ws, data);
  });

  ws.on('error', err => {
    console.error('WebSocket error observed:', err);
  });
});

server.listen(8080, () => {
  console.log('Server started on port 8080');
});