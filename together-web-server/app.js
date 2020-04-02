// Create express app and server
const express = require("express");
const app = express();
const http = require('http');

// Link all controllers
const index = require("./controllers/index.js");
app.use(index);

// Include middleware/files
require("dotenv").config();
const bodyParser = require('body-parser')
const cors = require('cors')

// Integrate socket.io
const socketIo = require('socket.io');
const server = http.createServer(app);
const io = socketIo(server);

// Set app uses
app.use(cors());

// Map all routes and display in console
let rowdyLogger = require('rowdy-logger');
let rowdyResults = rowdyLogger.begin(app);

io.on('connection', function(socket){
    console.log('a user connected with id', socket.id);
    

    socket.on("disconnect", () => {
        console.log('Bye Felicia!');
    });
});

app.listen(3001, () => {
    rowdyResults.print()
    console.log('listening')
})