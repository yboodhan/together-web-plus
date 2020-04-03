const express = require('express');
let router  = express.Router();

router.get('/', (req, res) => {
    console.log('get to the hello route');
    req.io.on("connection", function(socket) {
      console.log("I GOT HERE TO HELLO!");
    });
    res.send({response:'You got to hello'}).status(200);
});

module.exports = router;

