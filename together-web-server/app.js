// Create express app and server
const express = require("express");
const app = express();
const server = require('http').createServer(app);

// Include middleware/files
require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require('cors');

// Set up CORS
let corsOptions = {
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200
}

// Integrate socket.io
const io = require('socket.io')(server);

// Map all routes and display in console
let rowdyLogger = require('rowdy-logger');
let rowdyResults = rowdyLogger.begin(app);

// Link all controllers
app.get('/', cors(corsOptions), (req, res) => {
    console.log('I am here!')
    res.send({response: 'HEY'}).status(200);
})

io.on('connection', function(socket){
    console.log('a user connected with id', socket.id);
    socket.emit('connected', {msg:'I am connected.'})

    socket.on("disconnect", () => {
        console.log('Bye!');
    });
});

server.listen(process.env.PORT || 3001, () => {
    rowdyResults.print()
    console.log('listening')
})