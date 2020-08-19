'use strict';

const axios = require('axios');


const hogwartsWeather = async() => {
  let weather = await axios.get(`https://api.darksky.net/forecast/${process.env.WEATHER_API_KEY}/54.939196,-3.929788`);
  weather = weather.data.currently;
  console.log('Hogwarts Weather', weather);
  return weather;
}

module.exports = hogwartsWeather

