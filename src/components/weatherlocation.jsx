import React, { Component } from 'react';

export default class WeatherLocation extends Component {
  constructor (props) {
    super(props);
    this.state = {
      location: this.props.selectedLocation
    };
  }

  setLocation = (event) => {
    this.setState({location: event.target.value});
  }

  handleKeyPress = (event) => {
    if ( event.charCode === 13 ) {
      this.getWeather();
    }
  }

  handleFocus = (event) => {
    if ( this.state.location === event.target.value ) {
      this.setState({location: ''});
    }
  }

  getWeather = () => {
    if ( this.state.location ) {
      this.props.onChange(this.state.location);
    }
  }

  render () {
    return (
      <div className="weather-location-input">
        <input type="text" value={this.state.location} onChange={this.setLocation} onKeyPress={this.handleKeyPress}
               onFocus={ this.handleFocus }/>
        <button className="weather-cta" onClick={this.getWeather}>Get Weather</button>
      </div>
    )
  }
}
