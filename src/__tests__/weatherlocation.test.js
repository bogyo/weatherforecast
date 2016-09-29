import React from 'react';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import WeatherLocation from '../components/weatherlocation.jsx';

describe('WeatherLocation', () => {

  const WeatherLocationInstance = shallow(<WeatherLocation selectedLocation="Budapest" onChange="setLocation"/>);


  it('should set the initial location state with given value/Budapest', () => {

    expect(WeatherLocationInstance.state('location')).toEqual("Budapest");

  });

  it('should change the location state with given value/Amsterdam', () => {

    WeatherLocationInstance.find('input').simulate('change', {target: {value: "Amsterdam"}});

    expect(WeatherLocationInstance.state('location')).toEqual('Amsterdam');

  });

  //todo click or autosugg?

});
