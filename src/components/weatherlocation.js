import React, {Component} from 'react';

export default class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {location: this.props.selectedLocation} ;
  }
  setLocation = (event) =>{
    this.setState({location: event.target.value});
  }

  getWeather = () => {
    this.props.onChange(this.state.location); //onChange if it is a drop
  }

  render() {
    return (
        <div className="weather-location-input">
          <input type="text" value={this.state.location} onChange={this.setLocation}/>
          <button onClick={this.getWeather}>get</button>
        </div>
    )
  }
}
