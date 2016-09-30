import React, { Component } from 'react';
import WeatherLocation from './components/weatherlocation.jsx';
import WeatherTime from './components/weathertime.jsx';
import WeatherTableInfo from './components/weathertableinfo.jsx';
import WeatherTableForecast from './components/weathertableforecast.jsx';

import WeatherService from './services/weatherservice.js';
import sorter from './utils/sorter.js';
import './App.css';

class Weather extends Component {
  constructor () {
    super();
    this.state = {location: 'Budapest', time: 'Today', weatherInfoNow: [], weatherInfoToday: [], weatherForecast: []};

    this.updateComponent = () => {
      WeatherService.getCurrentWeather(this.state.location).then(function (weather) {
        this.setState({weatherInfoNow: weather});
      }.bind(this));

      WeatherService.getForecast(this.state.location).then(function (weatherlist) {
        this.setState({weatherInfoToday: sorter.getTodayForecast(weatherlist)});

        this.setState({weatherForecast: sorter.getForecast(weatherlist)});

      }.bind(this));
    }

    this.updateComponent();
  }

  setLocation = (location) => {
    console.log('change location', location)
    this.setState({location: location}, this.updateComponent);
  }

  setTime = (time) => {
    console.log('change time', time)
    this.setState({time: time});
  }

  render () {
    return (
      <div className="weather">
        <div className="weather-header">
          <h2> Welcome to Weather Forecast App </h2>
          <p>Type the city name you are interested in below end press Enter<br />
            or click on the get weather button</p>
        </div>
        <div className="weather-body">
          <WeatherLocation selectedLocation={this.state.location} onChange={this.setLocation}/>
          <WeatherTime selectedTime={this.state.time} onChange={this.setTime}/>


          { this.state.time === 'Today' ?
            <WeatherTableInfo weatherInfoNow={this.state.weatherInfoNow}
                              weatherInfoToday={this.state.weatherInfoToday}/>
            : <WeatherTableForecast weatherForecast={this.state.weatherForecast }/> }

        </div>
      </div>
    )
  }
}


export default Weather;
