require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');
const WEATHER_ACCESS_KEY = process.env.WEATHER_ACCESS_KEY || '';

router.get('/', async (req, res) => {
  const city = req.query.city ? req.query.city : 'London';
  const unit = req.query.unit ? req.query.unit : 'metric';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${WEATHER_ACCESS_KEY}`;
  try {
    const weather = await axios.get(url);
    return res.send(weather.data);
  } catch (err) {
    res.status(400).send('Error: ', err);
  }
});

module.exports = router;
