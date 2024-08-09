const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

const userRouter = require('./routes/userRoutes');


app.use('/api/v1/users', userRouter);

module.exports = app;