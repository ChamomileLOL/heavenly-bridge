const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const dijkstraController = require('../controllers/dijkstraController'); // Import the logic

router.post('/upserve', messageController.createMessage);

// The Narrow Gate for the M.E. Conferment
router.get('/ascension-path', dijkstraController.calculateAscension);

module.exports = router;