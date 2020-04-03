const express = require('express');
let router  = express.Router();

router.get('/', (req, res) => {
    console.log('💬 Successfully got to CHAT GET/ route.');

    res.send({response:'Success, CHAT GET/'}).status(200);
});

module.exports = router; 