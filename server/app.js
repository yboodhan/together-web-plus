// Create express app
const express = require('express');
const app = express();

// Map all routes and display in console
let rowdyLogger = require('rowdy-logger');
let rowdyResults = rowdyLogger.begin(app);


// Link all controllers
// app.use('/auth', require('./controllers/auth'));
// app.use('/watchlist', require('./controllers/watchlist'));
// app.use('/profile', require('./controllers/profile'));

app.get('/', (req, res) => {
    res.send('Welcome to the Together Web server.')
})

app.get('*', (req, res) => {
    res.send('Error: 404, this endpoint does not exist.')
})

app.listen(3001, () => {
    rowdyResults.print()
})