require('module-alias/register');
const express = require('express');

const cors = require('cors');
const cookieParser = require('cookie-parser');

const appApiRouter = require('@/routes/app/api');
const coreApiRouter = require('@/routes/core/api');
const authApiRouter = require('@/routes/auth/api');

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

app.use('/api', authApiRouter);
app.use('/api', appApiRouter);
app.use('/api', coreApiRouter);

module.exports = app;
