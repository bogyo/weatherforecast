import React, { Component } from 'react';

export default class WeatherTableInfo extends Component {
  
  renderWeather (item) {
    return <tr key={item.key}>
      <td>{item.time}</td>
      <td><img src={item.icon} alt="icon"/></td>
      <td>{item.temp}</td>
      <td>{item.humidity}</td>
    </tr>;
  }
  
  render () {
    var now = this.props.weatherInfoNow,
      today = this.props.weatherInfoToday;
    
    return <div>
      <table className="weather-table">
        <thead>
        <tr>
          <td>time</td>
          <td>icon</td>
          <td>temperature<br />F</td>
          <td>humidity<br />%</td>
        </tr>
        </thead>
        <tbody>
        {now.map(this.renderWeather)}
        
        {today.map(this.renderWeather)}</tbody>
      </table>
    </div>;
  }
}
