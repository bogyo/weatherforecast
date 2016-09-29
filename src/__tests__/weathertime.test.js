import React from 'react';
import {shallow} from 'enzyme';
import WeatherTime from '../components/weathertime.jsx';

describe('WeatherTime', () => {

  const WeatherTimeInstance = shallow(<WeatherTime selectedTime="Today" onChange="setTime"/>);

  beforeEach(() => {
    WeatherTimeInstance.setProps({'onChange': function(e){return e;}});
  });

  it('should set the initial time state with given value/Today', () => {

    expect(WeatherTimeInstance.state('time')).toEqual('Today');

  });

  it('should change the time state with given value/Forecast', () => {

    WeatherTimeInstance.find('select').simulate('change', {target: {value: "Forecast"}});

    expect(WeatherTimeInstance.state('time')).toEqual('Forecast');

  });

  it('should change the time state BACK with given value', () => {

    expect(WeatherTimeInstance.state('time')).toEqual('Forecast');

    WeatherTimeInstance.find('select').simulate('change', {target: {value: "Today"}});

    expect(WeatherTimeInstance.state('time')).toEqual('Today');

  });


});
