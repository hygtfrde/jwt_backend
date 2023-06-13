require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const routes = require('./routes');

// ---------------------------------------- BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Custom Logger Middleware
app.use((req, res, next) => {
  const url = req.url;
  const method = req.method;
  const requestedAt = new Date().toLocaleString();
  console.log( `URL:${url} -  METHOD:${method} - AT:${requestedAt}`);
  next();
});

// ---------------------------------------- CORS OPTIONS
const corsOptions = {
  origin: [process.env.DEV_CLIENT_URL], 
  credentials: true, 
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Length', 'X-Custom-Header'],
  maxAge: 3600
}
app.use(cors(corsOptions));

// ------------------------------------------ ROUTES
// GET Root Route
app.get('/', (req, res) => res.send('<h1>Welcome to Auth API</h1>'));

// Auth Routes
app.use('/api/v1/auth', routes.auth);

// Contacts Routes
app.use('/api/v1/contacts', routes.contacts);

// Users Routes
app.use('/api/v1/users', routes.users);

// 404
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// ---------------------------------------- START SERVER
app.listen(process.env.DEV_SERVER_PORT, () => {
  console.log(`Server running at http://localhost:${process.env.DEV_SERVER_PORT}`);
});
