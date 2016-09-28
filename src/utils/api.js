
var api = {
	baseUrl: "http://api.openweathermap.org/data/2.5/",
	forecastUrl: "forecast/?q=",
	currentWeatherUrl: "weather?q=",
	key: '5a7ad2191f4fb336f438059f2c32cf88',
  addAppid: '&appid=',
  iconUrl: 'http://openweathermap.org/img/w/',
  getForecastUrl: function() {
		return this.baseUrl + this.forecastUrl;
	},
	getCurrentWeatherUrl: function() {
		return this.baseUrl + this.currentWeatherUrl;
	},
  getApiKey: function(){
    return this.addAppid + this.key;
  }
}

module.exports = api;
