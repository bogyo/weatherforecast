import api from '../utils/api.js';

describe('API', () => {

  it('should get the url for forecast endpoint',() => {

    var forecastUrl = api.getForecastUrl();

    expect(forecastUrl).toEqual('http://api.openweathermap.org/data/2.5/forecast/?q=');

  });

  it('should get the url for current weather endpoint',() => {

    var currentWeatherUrl = api.getCurrentWeatherUrl();

    expect(currentWeatherUrl).toEqual('http://api.openweathermap.org/data/2.5/weather?q=');

  });

});
