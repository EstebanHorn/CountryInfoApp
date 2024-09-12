const express = require('express');
const router = express.Router();
const countryController = require('../controller/countryController');
// Rutas de la API
router.get('/countries', countryController.getAvailableCountries);
router.get('/country/:code', countryController.getCountryInfo);

module.exports = router;
