// Create express app and server
const express = require("express");
const app = express();
const server = require('http').createServer(app);

// Link all controllers
const index = require("./controllers/index.js");
app.use(index);

// Include middleware/files
require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require('cors');

// Integrate socket.io
const io = require('socket.io')(server);

// Set app uses
app.use(cors);
// app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

// Map all routes and display in console
let rowdyLogger = require('rowdy-logger');
let rowdyResults = rowdyLogger.begin(app);

io.on('connection', function(socket){
    console.log('a user connected with id', socket.id);
    socket.emit('connected', {msg:'I am connected.'})

    socket.on("disconnect", () => {
        console.log('Bye!');
    });
});

server.listen(3001, () => {
    rowdyResults.print()
    console.log('listening')
})