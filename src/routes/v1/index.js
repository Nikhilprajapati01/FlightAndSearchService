const express = require('express');

const city_controller = require('../../controllers/city_controller.js');
const  Airportcontroller = require('../../controllers/Airport_controller.js')

const router = express.Router();


router.post('/city', city_controller.create);
router.delete('/city/:id', city_controller.destroy);
router.get('/city/:id', city_controller.get);
router.get('/city', city_controller.getall);
router.patch('/city/:id', city_controller.update);

router.post('/airport', Airportcontroller.create);

module.exports = router;