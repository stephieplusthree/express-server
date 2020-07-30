// import files and packages up here
const express = require('express');
const morgan = require('morgan');
const data = require('./data');

// create your express server below
var app = express();

// add your routes and middleware below
app.set('json spaces', 2);

app.use(morgan('dev'));

app.use(express.static('public'));

app.get('/data', (req, res) => res.json(data)); 

// finally export the express application
module.exports = app;
