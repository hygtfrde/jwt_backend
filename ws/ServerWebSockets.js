// Server-side code
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', (message) => {
    console.log('Received message:', message);
    // Process the message and send a response
    ws.send('Hello from the server!');
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});