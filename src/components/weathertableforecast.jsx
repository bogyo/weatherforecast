import React, { Component } from 'react';

export default class WeatherTableForecast extends Component {
  
  render () {
    var forecast = this.props.weatherForecast;
    console.log(forecast);
    return (
      <table className="weather-table">
        <thead>
        <tr>
          <td>day</td>
          <td>icon min</td>
          <td>icon max</td>
          <td>min temperature<br />F</td>
          <td>max temperature<br />F</td>
        </tr>
        </thead>
        <tbody>
        {forecast.map(function (day, index) {
          return <tr key={ index }>
            <td>{day.max.dt_txt}</td>
            <td><img src={day.min.icon} alt="icon"/></td>
            <td><img src={day.max.icon} alt="icon"/></td>
            <td>{day.min.main.temp_min}</td>
            <td>{day.max.main.temp_max}</td>
          </tr>;
        })}
        </tbody>
      </table>
    )
  }
}
