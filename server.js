const express = require('express');
const payload = require('payload');

require('dotenv').config();
const app = express();

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

// Add your own express routes here

// payload.init({
//   secret: 'SECRET_KEY',
//   mongoURL: 'mongodb://localhost/payload',
//   express: app,
// })

app.listen(3000);

// const express = require('express');

// const app1 = express();

// app1.listen(3000, async () => {
// 	console.log('Express is now listening for incoming connections on port 3000.')
// });