import React, {Component} from 'react';

export default class WeatherTableForecast extends Component {

  render() {
       var forecast = this.props.weatherForecast;

       return (
           <table className="weather-table">
             <tbody>
               {forecast.map(function(day, index){
                 return <tr key={ index }>
                   <td>{day.max.dt_txt}</td>
                   <td><img src={day.min.weather[0].icon} alt="icon"/></td>
                   <td><img src={day.max.weather[0].icon} alt="icon"/></td>
                   <td>{day.min.main.temp_min}</td>
                   <td>{day.max.main.temp_max}</td>

                 </tr>;
               })}
             </tbody>
           </table>
       )
   }
}
