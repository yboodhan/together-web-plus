// Create express app
import express, { Request, Response } from 'express';
const app = express();

// Map all routes and display in console
let rowdyLogger = require('rowdy-logger');
let rowdyResults = rowdyLogger.begin(app);


// Link all controllers
app.use('/auth', require('./controllers/auth'));
app.use('/watchlist', require('./controllers/watchlist'));
app.use('/profile', require('./controllers/profile'));

