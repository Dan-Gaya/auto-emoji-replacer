const express = require('express');
const router = express.Router();
const integrationSpecController = require('../controllers/integrationSpecController');

router.get('/', integrationSpecController.integrateSpec);

module.exports = router;
