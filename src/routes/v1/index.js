const express = require("express");
const CityController = require("../../controllers/city-controllers");
const AirportController = require("../../controllers/airport-controller");
const FlightController = require("../../controllers/flight-controller");

const router = express.Router();

router.post('/city', CityController.create);
router.get('/city/airports', CityController.getAllAirports);
router.delete('/city/:id', CityController.destroy);
router.put('/city/:id', CityController.update);
router.get('/city/:id', CityController.get);
router.get('/cities', CityController.getAll);
router.post('/cities', CityController.createAll);

router.post('/airport', AirportController.create);
// create airport ~ name, cityId, 
// update airport ~ name
// delete airport ~ should get unlinked from the city
// get airport ~ by id

router.post('/flights', FlightController.create);
router.post('/flights/bulk', FlightController.createBulk);
router.get('/flights', FlightController.getAll);
router.delete('/flights/:id', FlightController.destroy);

module.exports = router;