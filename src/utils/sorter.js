import api from '../utils/api.js';

var sorter = {

    /***
    *** TRANSFORM INCOMING DATE AND ICON DATA
    ***/


  transformTimeData: function(time){
    return time.split(' ',2)[1].substr(0, time.split(' ',2)[1].length - 3);
  },
  transformDateData: function(date){
    return date.split(' ',2)[0].substr(0, date.split(' ',2)[0].length);
  },

  transformIconData: function (icon) {
    return api.iconUrl + icon + '.png';
  },


  /***
  *** CURRENT WEATHER RELATED DATA TRANSFORMATIONS
  ***/

  getTodayForecast: function(list) {
    var today = this.sortTodayItems(list),
        todayData = this.filterDisplayValuesFromToday(today);
    // Do we need all of this? Sometimes the API give back only future items,
    // sometimes data from the LAST few hour as well, TODO: handle this error, sort for future items
    return todayData;
  },
  sortTodayItems: function (list) { // sort list items only for today
    var today = new Date().toJSON().slice(0,10);

     return list.filter( elem => {
      return elem.dt_txt.includes(today);
    });
  },
  filterDisplayValuesFromToday: function (today) { //filter values we would like to display in component
    return today.map(elem => {
      return {
        key: elem.dt,
        time:this.transformTimeData(elem.dt_txt),
        icon: this.transformIconData(elem.weather[0].icon),
        temp: elem.main.temp,
        humidity: elem.main.humidity
      };
    });
  },

/***
*** FORECAST RELATED DATA TRANSFORMATIONS
***/

  getForecast: function(list){
   var forecast = this.sortForcastItems(list);

   return this.filterDisplayValuesFromForecast(forecast);
  },

  sortForcastItems: function(list){
    var today = new Date().toJSON().slice(0,10);

     return list.filter( elem => {
      return !elem.dt_txt.includes(today);
    });
  },

  groupForecastItemsByDays: function(forecast){ //group by days
    return forecast.reduce( function (prev, item) {
      var day = item.dt_txt.split(' ',2)[0];

      if ( day in prev ) {
        prev[day].push(item);
      }
      else {
        prev[day] = [item];
      }

      return prev;
    }, {} );
  },


  filterDisplayValuesFromForecast: function(forecast){
    // console.log('forecast',forecast);
     var days = this.groupForecastItemsByDays(forecast),
        displayMaxDataOfDay = [], displayMinDataOfDay = [], displayData = [];

    //go trough on every day, choose the max

    Object.keys(days).map(function(day){
       displayMaxDataOfDay[day] = [];
       return days[day].reduce(function(prev, curr) {
           return prev.main.temp_max > curr.main.temp_max  ? displayMaxDataOfDay[day]= prev : displayMaxDataOfDay[day]  = curr;
       });
     });

    //go trough on every day, choose the min

     Object.keys(days).map(function(day){
       displayMinDataOfDay[day] = [];
       return days[day].reduce(function(prev, curr) {
           return prev.main.temp_min < curr.main.temp_min  ?  displayMinDataOfDay[day] = prev :  displayMinDataOfDay[day] = curr;
       });
     });

     // give back a list with days
     // each day should have two obj min and max, with transformed Icon and dt_txt

     return Object.keys(displayMaxDataOfDay).map(function(day){
       displayData[day] = {};
       displayData[day]['max'] = displayMaxDataOfDay[day];
       displayData[day].max.weather[0].icon = this.transformIconData(displayData[day].max.weather[0].icon);
       displayData[day].max.dt_txt = this.transformDateData(displayData[day].max.dt_txt);
       displayData[day]['min'] = displayMinDataOfDay[day];
       displayData[day].min.weather[0].icon = this.transformIconData(displayData[day].min.weather[0].icon);

       return displayData[day];
     }, this);
  }
}

module.exports = sorter;
