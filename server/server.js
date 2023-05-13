// bring express into our project
const express = require('express');

// bring body-parser into our project
const bodyParser = require('body-parser'); 

// import quoteList from the quotes module
const quoteList = require('./modules/quotes');

// create your express app
const app = express();

// identify which port we'll run on
const port = 5000;

// serve static files that live in the public folder
// static files include html, css, client-side JS
app.use(express.static('server/public'));

// use bodyParser to parse data from the client
// parse = turn the data from the client into something we can 
// use on the server
app.use(bodyParser.urlencoded({ extended: true }));