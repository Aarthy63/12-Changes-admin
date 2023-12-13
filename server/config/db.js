const mongoose = require('mongoose');

// Use the IPv4 loopback address (127.0.0.1)
const dbURL = 'mongodb://127.0.0.1:27017/adminpanel';

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the database.');
});
