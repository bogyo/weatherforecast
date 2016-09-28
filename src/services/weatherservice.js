import api from '../utils/api.js';
import sorter from '../utils/sorter.js';
import axios from 'axios';

var service = {
  getCurrentWeather: function (location) {
    return new Promise(function (resolve, reject) {
      axios
      .get(api.getCurrentWeatherUrl() + location + api.getApiKey())
      .then(function(result) {
        var weather = []; // choose the necessary datas and push it to an array.

        weather.push(
          {key: result.data.id,
          time: 'now',
          icon: sorter.transformIconData(result.data.weather[0].icon),
          temp: result.data.main.temp,
          humidity: result.data.main.humidity
          });

      //    return weather;

        resolve(weather); // give back necessary weather data to the calling component
      });
    });
  },

  getForecast: function (location) {
    return new Promise(function (resolve, reject){
      axios
      .get(api.getForecastUrl() + location + api.getApiKey())
      .then(function(result) {

        resolve(result.data.list);
      });
    })
  }
}

module.exports = service;
