const axios = require('axios');
require('dotenv').config(); // Carga las variables del archivo .env

// Accede a las variables de entorno

const AVAILABLE_COUNTRIES_URL = process.env.AVAILABLE_COUNTRIES_URL;
const COUNTRY_INFO_URL = process.env.COUNTRY_INFO_URL;
const POPULATION_URL = process.env.POPULATION_URL;
const FLAG_URL = process.env.FLAG_URL;

// Get available countries
const getAvailableCountries = async (req, res) => {
  try {
    const response = await axios.get(AVAILABLE_COUNTRIES_URL);
    res.json(response.data);
  } catch (error) {
    res.status(500);
  }
};


// Obtener información de un país específico
const getCountryInfo = async (req, res) => {
  const countryCode = req.params.code;

  try {
    // Paso 1: Obtener la información del país usando el código
    const countryInfoResponse = await axios.get(`${COUNTRY_INFO_URL}${countryCode}`);
    countryInfoData = countryInfoResponse.data;
    const countryName = countryInfoData.commonName; // Ajuste aquí si la clave es diferente

    
    // Paso 2: Obtener la población del país usando el nombre
    const populationResponse = await axios.get(POPULATION_URL);
    const populationData = populationResponse.data.data.find(c => c.country.toLowerCase() === countryName.toLowerCase());

    
    // Paso 3: Obtener la bandera del país usando el nombre
    const flagResponse = await axios.get(FLAG_URL);
    const flagData = flagResponse.data.data.find(c => c.name.toLowerCase() === countryName.toLowerCase());

    // Construir la respuesta con la información del país
    const countryInfo = {
      countryInfo: countryInfoData,
      population: populationData,
      flag: flagData ? flagData.flag : null
    };

    res.json(countryInfo);
  } catch (error) {
    console.error('Error fetching country info:', error);
    res.status(500);
  }
};

module.exports = { getAvailableCountries, getCountryInfo };