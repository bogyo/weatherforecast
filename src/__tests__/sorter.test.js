import sorter from '../utils/sorter';
import api from '../utils/api';
import sample from '../mock/sample.js';

describe('Sorter', () => {
  // TODO: follow separation of sorter.js
  
  const dataToDisplayToday = [
    {
      key: 1475128800,
      time: '06:00',
      icon: api.iconUrl + '01d.png',
      alt: 'Clear',
      temp: 288.13,
      humidity: 75
    } ];
  
  it('should give back only the "hour and min part" of the given string', () => {
    var timeData = sorter.transformTimeData('2016-09-28 10:00:00');
    
    expect(timeData).toEqual('10:00');
  });
  
  it('should give back only the "hour and min part" of the given string', () => {
    var dateData = sorter.transformDateData('2016-09-28 10:00:00');
    
    expect(dateData).toEqual('2016-09-28');
  });
  
  it('should give back icon src', () => {
    var dateData = sorter.transformIconData('icon');
    
    expect(dateData).toEqual(api.iconUrl + 'icon.png');
  });
  
  it('should sort only weather data for today', () => {
    
    var weatherList = sorter.sortTodayItems(sample.sampleList);
    
    expect(weatherList).toEqual(sample.todayList);
  });
  
  it('should  sort the necessary datas from today list', () => {
    var filtered = sorter.filterDisplayValuesFromToday(sample.todayList);
    
    expect(filtered).toEqual(dataToDisplayToday);
  });
  
  it('should return with the final weather data for today forecast', () => {
    var filtered = sorter.getTodayForecast(sample.sampleList);
    
    expect(filtered).toEqual(dataToDisplayToday);
  });
  
  it('should return with weather data for the nex few days NOT today', () => {
    var forecast = sorter.sortForcastItems(sample.sampleList);
    
    expect(forecast).toEqual(sample.forecastList);
  });
  
  it('should return with weather data group by days', () => {
    var groupedData = sorter.groupForecastItemsByDays(sample.forecastList);
    
    expect(groupedData).toEqual(sample.forcastGroupedByDay);
  });
  
  it('should return min max temperatures of the following days', () => {
    var displayForecastData = sorter.filterDisplayValuesFromForecast(sample.forecastList);
    
    expect(displayForecastData).toEqual(sample.minmaxForecast);
  });
  
  
});
