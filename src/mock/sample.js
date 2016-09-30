import api from '../utils/api';

var sample = {
  dataToDisplayToday: [
    {
      key: 1475128800,
      time: '06:00',
      icon: api.iconUrl + '01d.png',
      alt: 'Clear',
      temp: 288.13,
      humidity: 75
    } ],

  todayList: [
    {
      "dt": 1475128800,
      "main": {
        "temp": 288.13,
        "temp_min": 287.581,
        "temp_max": 288.13,
        "pressure": 1021.53,
        "sea_level": 1038.67,
        "grnd_level": 1021.53,
        "humidity": 75,
        "temp_kf": 0.55
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "sky is clear",
          "icon": "01d"
        } ],
      "dt_txt": "2016-09-29 06:00:00"
    } ],
  sampleList: [
    {
      "dt": 1475118000,
      "main": {
        "temp": 287.25,
        "temp_min": 286.567,
        "temp_max": 287.25,
        "pressure": 1021.71,
        "sea_level": 1038.98,
        "grnd_level": 1021.71,
        "humidity": 74,
        "temp_kf": 0.68
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        } ],
      "dt_txt": "2016-09-30 03:00:00"
    },
    {
      "dt": 1475193600,
      "main": {
        "temp": 285.912,
        "temp_min": 285.912,
        "temp_max": 285.912,
        "pressure": 1016.56,
        "sea_level": 1033.65,
        "grnd_level": 1016.56,
        "humidity": 79
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "sky is clear",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.46,
        "deg": 211.001
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-09-30 00:00:00"
    },
    {
      "dt": 1475128800,
      "main": {
        "temp": 288.13,
        "temp_min": 287.581,
        "temp_max": 288.13,
        "pressure": 1021.53,
        "sea_level": 1038.67,
        "grnd_level": 1021.53,
        "humidity": 75,
        "temp_kf": 0.55
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "sky is clear",
          "icon": "01d"
        } ],
      "dt_txt": "2016-09-29 06:00:00"
    },
    {
      "dt": 1475139600,
      "main": {
        "temp": 294.98,
        "temp_min": 294.572,
        "temp_max": 294.98,
        "pressure": 1021.23,
        "sea_level": 1038.23,
        "grnd_level": 1021.23,
        "humidity": 60,
        "temp_kf": 0.41
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "sky is clear",
          "icon": "01d"
        } ],
      "dt_txt": "2016-09-31 09:00:00"
    },
    {
      "dt": 1475280000,
      "main": {
        "temp": 287.05,
        "temp_min": 287.05,
        "temp_max": 287.05,
        "pressure": 1012.25,
        "sea_level": 1029.35,
        "grnd_level": 1012.25,
        "humidity": 83
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 68
      },
      "wind": {
        "speed": 2.92,
        "deg": 202.501
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-10-01 00:00:00"
    },
    {
      "dt": 1475442000,
      "main": {
        "temp": 290.465,
        "temp_min": 290.465,
        "temp_max": 290.465,
        "pressure": 1011.06,
        "sea_level": 1028.15,
        "grnd_level": 1011.06,
        "humidity": 72
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 56
      },
      "wind": {
        "speed": 1.32,
        "deg": 214.5
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-10-02 21:00:00"
    }
  ],

  forecastList: [
    {
      "dt": 1475118000,
      "main": {
        "temp": 287.25,
        "temp_min": 286.567,
        "temp_max": 287.25,
        "pressure": 1021.71,
        "sea_level": 1038.98,
        "grnd_level": 1021.71,
        "humidity": 74,
        "temp_kf": 0.68
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        } ],
      "dt_txt": "2016-09-30 03:00:00"
    }, {
      "dt": 1475193600,
      "main": {
        "temp": 285.912,
        "temp_min": 285.912,
        "temp_max": 285.912,
        "pressure": 1016.56,
        "sea_level": 1033.65,
        "grnd_level": 1016.56,
        "humidity": 79
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "sky is clear",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.46,
        "deg": 211.001
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-09-30 00:00:00"
    },
    {
      "dt": 1475139600,
      "main": {
        "temp": 294.98,
        "temp_min": 294.572,
        "temp_max": 294.98,
        "pressure": 1021.23,
        "sea_level": 1038.23,
        "grnd_level": 1021.23,
        "humidity": 60,
        "temp_kf": 0.41
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "sky is clear",
          "icon": "01d"
        } ],
      "dt_txt": "2016-09-31 09:00:00"
    },
    {
      "dt": 1475280000,
      "main": {
        "temp": 287.05,
        "temp_min": 287.05,
        "temp_max": 287.05,
        "pressure": 1012.25,
        "sea_level": 1029.35,
        "grnd_level": 1012.25,
        "humidity": 83
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 68
      },
      "wind": {
        "speed": 2.92,
        "deg": 202.501
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-10-01 00:00:00"
    },
    {
      "dt": 1475442000,
      "main": {
        "temp": 290.465,
        "temp_min": 290.465,
        "temp_max": 290.465,
        "pressure": 1011.06,
        "sea_level": 1028.15,
        "grnd_level": 1011.06,
        "humidity": 72
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 56
      },
      "wind": {
        "speed": 1.32,
        "deg": 214.5
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-10-02 21:00:00"
    }
  ],
  forcastGroupedByDay: {
    "2016-09-30": [
      {
        "dt": 1475118000,
        "main": {
          "temp": 287.25,
          "temp_min": 286.567,
          "temp_max": 287.25,
          "pressure": 1021.71,
          "sea_level": 1038.98,
          "grnd_level": 1021.71,
          "humidity": 74,
          "temp_kf": 0.68
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          } ],
        "dt_txt": "2016-09-30 03:00:00"
      },
      {
        "dt": 1475193600,
        "main": {
          "temp": 285.912,
          "temp_min": 285.912,
          "temp_max": 285.912,
          "pressure": 1016.56,
          "sea_level": 1033.65,
          "grnd_level": 1016.56,
          "humidity": 79
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear", "icon": "01n"
          } ],
        "clouds": {"all": 0},
        "wind": {
          "speed": 2.46,
          "deg": 211.001
        },
        "sys": {"pod": "n"},
        "dt_txt": "2016-09-30 00:00:00"
      } ],
    "2016-09-31": [
      {
        "dt": 1475139600,
        "main": {
          "temp": 294.98,
          "temp_min": 294.572,
          "temp_max": 294.98,
          "pressure": 1021.23,
          "sea_level": 1038.23,
          "grnd_level": 1021.23,
          "humidity": 60,
          "temp_kf": 0.41
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d"
          } ],
        "dt_txt": "2016-09-31 09:00:00"
      } ],
    "2016-10-01": [
      {
        "dt": 1475280000,
        "main": {
          "temp": 287.05,
          "temp_min": 287.05,
          "temp_max": 287.05,
          "pressure": 1012.25,
          "sea_level": 1029.35,
          "grnd_level": 1012.25,
          "humidity": 83
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          } ],
        "clouds": {"all": 68},
        "wind": {"speed": 2.92, "deg": 202.501},
        "sys": {"pod": "n"},
        "dt_txt": "2016-10-01 00:00:00"
      } ],
    "2016-10-02": [
      {
        "dt": 1475442000,
        "main": {
          "temp": 290.465,
          "temp_min": 290.465,
          "temp_max": 290.465,
          "pressure": 1011.06,
          "sea_level": 1028.15,
          "grnd_level": 1011.06, "humidity": 72
        }, "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        } ],
        "clouds": {"all": 56},
        "wind": {"speed": 1.32, "deg": 214.5},
        "sys": {"pod": "n"},
        "dt_txt": "2016-10-02 21:00:00"
      }
    ]
  },

  minmaxForecast: {
    "2016-09-30": {
      max: {
        "dt": 1475118000,
        "main": {
          "temp": 287.25,
          "temp_min": 286.567,
          "temp_max": 287.25,
          "pressure": 1021.71,
          "sea_level": 1038.98,
          "grnd_level": 1021.71,
          "humidity": 74,
          "temp_kf": 0.68
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          } ]
      },
      min: {
        "dt": 1475193600,
        "main": {
          "temp": 285.912,
          "temp_min": 285.912,
          "temp_max": 285.912,
          "pressure": 1016.56,
          "sea_level": 1033.65,
          "grnd_level": 1016.56,
          "humidity": 79
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear", "icon": "01n"
          } ],
        "clouds": {"all": 0},
        "wind": {
          "speed": 2.46,
          "deg": 211.001
        },
        "sys": {"pod": "n"},
        "dt_txt": "2016-09-30 00:00:00"
      }
    },
    "2016-09-31": {
      max: {
        "dt": 1475139600,
        "main": {
          "temp": 294.98,
          "temp_min": 294.572,
          "temp_max": 294.98,
          "pressure": 1021.23,
          "sea_level": 1038.23,
          "grnd_level": 1021.23,
          "humidity": 60,
          "temp_kf": 0.41
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d"
          } ],
        "dt_txt": "2016-09-31 09:00:00"
      },
      min: {
        "dt": 1475139600,
        "main": {
          "temp": 294.98,
          "temp_min": 294.572,
          "temp_max": 294.98,
          "pressure": 1021.23,
          "sea_level": 1038.23,
          "grnd_level": 1021.23,
          "humidity": 60,
          "temp_kf": 0.41
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d"
          } ],
        "dt_txt": "2016-09-31 09:00:00"
      }
    },
    "2016-10-01": {
      max: {
        "dt": 1475280000,
        "main": {
          "temp": 287.05,
          "temp_min": 287.05,
          "temp_max": 287.05,
          "pressure": 1012.25,
          "sea_level": 1029.35,
          "grnd_level": 1012.25,
          "humidity": 83
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          } ],
        "clouds": {"all": 68},
        "wind": {"speed": 2.92, "deg": 202.501},
        "sys": {"pod": "n"},
        "dt_txt": "2016-10-01 00:00:00"
      },
      min: {
        "dt": 1475280000,
        "main": {
          "temp": 287.05,
          "temp_min": 287.05,
          "temp_max": 287.05,
          "pressure": 1012.25,
          "sea_level": 1029.35,
          "grnd_level": 1012.25,
          "humidity": 83
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          } ],
        "clouds": {"all": 68},
        "wind": {"speed": 2.92, "deg": 202.501},
        "sys": {"pod": "n"},
        "dt_txt": "2016-10-01 00:00:00"
      }
    },
    "2016-10-02": {
      max: {
        "dt": 1475442000,
        "main": {
          "temp": 290.465,
          "temp_min": 290.465,
          "temp_max": 290.465,
          "pressure": 1011.06,
          "sea_level": 1028.15,
          "grnd_level": 1011.06, "humidity": 72
        }, "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          } ],
        "clouds": {"all": 56},
        "wind": {"speed": 1.32, "deg": 214.5},
        "sys": {"pod": "n"},
        "dt_txt": "2016-10-02 21:00:00"
      },
      min: {
        "dt": 1475442000,
        "main": {
          "temp": 290.465,
          "temp_min": 290.465,
          "temp_max": 290.465,
          "pressure": 1011.06,
          "sea_level": 1028.15,
          "grnd_level": 1011.06, "humidity": 72
        }, "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          } ],
        "clouds": {"all": 56},
        "wind": {"speed": 1.32, "deg": 214.5},
        "sys": {"pod": "n"},
        "dt_txt": "2016-10-02 21:00:00"
      }
    }
  }
}

module.exports = sample;
