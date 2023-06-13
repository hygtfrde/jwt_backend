require('dotenv').config();
const mongoose = require('mongoose');
const DB_URL = process.env.REMOTE_DB_URI
// const REMOTE_DB_URI = '_____';

console.log('Setting up connection to: ', process.env.REMOTE_DB_URI)
console.log('firebase config obj: ', process.env.FIREBASE_CONFIG)

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully...!'))
.catch((err) => console.error(`Connection ERROR in MongoDB: ${err}`));

module.exports = {
  User: require('./models/User'),
};
