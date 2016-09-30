import api from '../utils/api.js';
import sorter from '../utils/sorter.js';
import axios from 'axios';

var service = {
  getCurrentWeather: function (location) {
    return new Promise((resolve, reject) => {
      axios
        .get(api.getCurrentWeatherUrl() + location + api.getApiKey())
        .then( result => {
          var weather = []; // choose the necessary datas and push it to an array.

          weather.push(
            {
              key: result.data.id,
              time: 'now',
              icon: sorter.transformIconData(result.data.weather[ 0 ].icon),
              temp: result.data.main.temp,
              humidity: result.data.main.humidity
            });

          resolve(weather); // give back necessary weather data to the calling component
        });                 // TODO: handle possible errors, handle reject
    });
  },

  getForecast: function (location) {
    return new Promise( (resolve, reject) => {
      axios
        .get(api.getForecastUrl() + location + api.getApiKey())
        .then( result => {

          resolve(result.data.list); // TODO: handle possible errors, handle reject
        });
    })
  }
}

module.exports = service;
