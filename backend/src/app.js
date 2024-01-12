const express = require('express');

const cors = require('cors');
const cookieParser = require('cookie-parser');

// subscribe express
const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Here our API Routes
app.get('/api', (req, res) => {
  res.send('hello wrld!')
});

// export and start up the site in server.js
module.exports = app;
