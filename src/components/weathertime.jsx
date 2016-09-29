import React, { Component } from 'react';

export default class WeatherTime extends Component {
  constructor (props) {
    super(props);
    this.state = {time: this.props.selectedTime};
  }
  
  updateValue = (event) => {
    this.setState({
      time: event.target.value
    });
    this.props.onChange(event.target.value);
  }
  
  render () {
    return (
      <div className="weather-time-input">
        <select value={this.state.time} onChange={this.updateValue}>
          <option value="Today">Today</option>
          <option value="Forecast">Forecast</option>
        </select>
      </div>
    )
  }
}
