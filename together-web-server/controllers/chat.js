const express = require('express');
let router  = express.Router();

router.get('/', (req, res) => {
    console.log('💬 Successfully got to CHAT GET/ route.');

    req.io.on('connection', function(socket) {
      console.log('💡 A user connect to CHAT GET/ route, id:', socket.id);

      socket.emit('connected', {msg:`💡 ${socket.id} connected to the chat page.`})

      socket.on('disconnect', () => {
          console.log(`🚨 A user disconnected from the chat page, id:`, socket.id);
      });
    });

    res.send({response:'Success, CHAT GET/'}).status(200);
});

module.exports = router;