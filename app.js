var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/v1/index');
const { NOT_FOUND_ERR_CODE, NOT_FOUND_ERR_MESSAGE } = require('./utils/constant');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/v1', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || NOT_FOUND_ERR_CODE);
  res.json({
    error: NOT_FOUND_ERR_CODE,
    message: NOT_FOUND_ERR_MESSAGE
  });
});

module.exports = app;
