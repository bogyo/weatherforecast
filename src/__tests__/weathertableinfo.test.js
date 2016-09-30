import React from 'react';
import {shallow} from 'enzyme';
import WeatherTableInfo from '../components/weathertableinfo.jsx';

describe('WeatherTableInfo', () => {
  const now = [{key: 1, time:'now', icon: 'sun.png', temp: '28', humidity: '34' }];
  const today = [{key: 1,time:'13:00',  icon: 'cloud.png', temp: '28', humidity: '32' },
      {key: 2, time:'15:00', icon: 'cloud.png', temp: '27', humidity: 'lastItem' }];

  it('should set the values for weather NOW', () => {
    const WeatherTableInfoInstance = shallow (
         <WeatherTableInfo weatherInfoNow={now} weatherInfoToday={today}/>
       );

    expect(WeatherTableInfoInstance.contains( <td>now</td> )).toEqual(true);
    expect(WeatherTableInfoInstance.contains( <td>28</td> )).toEqual(true);
    expect(WeatherTableInfoInstance.contains( <td><img src="sun.png" alt="icon"/></td> )).toEqual(true);
    expect(WeatherTableInfoInstance.contains( <td>34</td> )).toEqual(true);

  });

  it('should set the values for weather TODAY forecast', () => {
    const WeatherTableInfoInstance = shallow(
         <WeatherTableInfo weatherInfoNow={now} weatherInfoToday={today}/>
       );

    expect(WeatherTableInfoInstance.contains( <td>13:00</td> )).toEqual(true);
    expect(WeatherTableInfoInstance.contains( <td>28</td> )).toEqual(true);
    expect(WeatherTableInfoInstance.contains( <td><img src="cloud.png" alt="icon"/></td> )).toEqual(true);
    expect(WeatherTableInfoInstance.contains( <td>32</td> )).toEqual(true);

    expect(WeatherTableInfoInstance.contains( <td>lastItem</td> )).toEqual(true);

  });

});
