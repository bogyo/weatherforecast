import React from 'react';
import { shallow } from 'enzyme';
import WeatherTableForecast from '../components/weathertableforecast.jsx';

describe('WeatherTableForecast', () => {
  const forecast = [
    {
      "max": {
        "main": {
          "temp": 297.233,
          "temp_min": 297.233,
          "temp_max": 297.233,
          "humidity": 45
        },
        "weather": [
          {
            "description": "few clouds",
            "icon": "sun.png"
          } ],
        "icon": "sun.png",
        "dt_txt": "2016-09-29"
      },
      "min": {
        "main": {
          "temp": 285.83,
          "temp_min": 285.83,
          "temp_max": "286.567not_to_display",
          "humidity": 74,
        },
        "weather": [
          {
            "description": "few clouds",
            "icon": "cloud.png"
          } ],
        "icon": "cloud.png",
        "dt_txt": "2016-09-30"
      }
    } ];

  it('should set the values for weather FORECAST', () => {
    const WeatherTableForecastInstance = shallow(
        <WeatherTableForecast weatherForecast = {forecast} />
    );

  expect(WeatherTableForecastInstance.contains(<td>2016-09-29</td >)).toEqual(true);

  });
});
