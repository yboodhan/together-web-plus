// Create express app and server
const express = require("express");
const app = express();
const server = require('http').createServer(app);

// Include middleware/files
require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: true }))

// Set up CORS
let corsOptions = {
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200
}

// Integrate socket.io and pass to routers
const io = require('socket.io')(server);

// Map all routes and display in console
let rowdyLogger = require('rowdy-logger');
let rowdyResults = rowdyLogger.begin(app);

// Link all controllers
app.use('/chat', cors(corsOptions), require('./controllers/chat'));

app.get('/', cors(corsOptions), (req, res) => {
    res.send({response: 'Success, GET/'}).status(200);
});

// Create custom namespace
const chat = io.of('/chat');
const watch = io.of('/watch');

// Socket listens and emits for main page
chat.on('connection', function(socket){
    // Connection response
    console.log('💡 A user connected to the main page with thechat namespace, id:', socket.id);
    chat.emit('connected', {msg:`💡 ${socket.id} connected to the main page chat socket.`})

    // Require all other socket files
    require('./sockets/chatSocket')(socket);

    // Disconnection response
    socket.on('disconnect', () => {
        console.log(`🚨 A user disconnected from the main page chat socket, id:`, socket.id);
    });
});

watch.on('connection', function(socket){
    // Connection response
    console.log('💡 A user connected to the main page with the watch namespace, id:', socket.id);
    watch.emit('connected', {msg:`💡 ${socket.id} connected to the main page web socket.`})

    // Require all other socket files
    require('./sockets/watchSocket')(socket);

    // Disconnection response
    socket.on('disconnect', () => {
        console.log(`🚨 A user disconnected from the main page watch socket, id:`, socket.id);
    });
});

server.listen(process.env.PORT || 3001, () => {
    rowdyResults.print()
    console.log(`🌺🌻🌷 I am listening... 🌺🌻🌷`)
})