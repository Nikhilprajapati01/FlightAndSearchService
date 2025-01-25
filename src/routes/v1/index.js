const express = require('express');

const city_controller = require('../../controllers/city_controller.js');

const router = express.Router();


router.post('/city', city_controller.create);

module.exports = router;