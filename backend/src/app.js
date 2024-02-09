require('module-alias/register');
const express = require('express');

const cors = require('cors');
const cookieParser = require('cookie-parser');

const appApiRouter = require('@/routes/app/api');
const coreApiRouter = require('@/routes/core/api');

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
app.use('/api', appApiRouter);
app.use('/api', coreApiRouter);

// export and start up the site in server.js
module.exports = app;
