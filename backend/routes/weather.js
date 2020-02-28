require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');
const WEATHER_ACCESS_KEY = process.env.WEATHER_ACCESS_KEY || '';

router.get('/', async (req, res) => {
  const city = req.query.city || 'London';
  const unit = req.query.unit || 'imperial';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${WEATHER_ACCESS_KEY}`;
  try {
    const weather = await axios.get(url);
    return res.send(weather.data);
  } catch (err) {
    res.status(400).send('Error: ' + err);
  }
});

router.get('/all', async (req, res) => {
  const cityArray =
    req.query.cityArray.split(',').map(item => item.trim()) || [];
  const unit = req.query.unit || 'imperial';
  try {
    const promises = cityArray.map(async city => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${WEATHER_ACCESS_KEY}`;
      const response = await axios.get(url);
      if (!response) throw 'Empty response from axios call';
      return response.data;
    });

    const results = await Promise.all(promises);
    if (!results) throw 'There was some problem with resolving Promise.all';
    res.send(results);
  } catch (err) {
    return res.status(400).send('Err:' + err);
  }
});

module.exports = router;
