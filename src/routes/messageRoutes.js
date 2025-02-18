const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.get('/process-message', messageController.processMessage);

module.exports = router;
