require("dotenv").config();
var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type', 'authorization'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST',
    'Access-Control-Allow-Origin': '*'
  }));

  app.listen(process.env.PORT);
  console.log("api server listening on: ", process.env.PORT);

var fileUploadRouter = require('./app/routes/fileupload.route');
app.use('/fileUpload', fileUploadRouter);

module.exports = app;
