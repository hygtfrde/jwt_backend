const mongoose = require('mongoose');
const DB_URL = process.env.REMOTE_EXAMPLE_DB_URI

console.log('Setting up connection to: ', process.env.REMOTE_EXAMPLE_DB_URI)

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
