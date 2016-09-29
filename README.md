# weatherforecast

weatherforecast web application, using React.js. All weather information coming from https://openweathermap.org/api.

# install

- npm install
- runnig on port 3000

build:
- npm run build
- running on port 9000

#usage

- type a city name to the field and press enter

#features

- you will get weather information for today and the following days related to the typed city
- default state: weather information for today
- change to forecast state choose forecast from dropdown

- today state: avarage temprature, weather icon, and humidity information for right now and the next view hours
- forecast state: the minimum/maximum tempreatures for the next few days, what I counted from incoming data

# possible future development plan

- handling errors - /not city name typed in, API errors/
- default location definition based on geolocation
- autosuggest dropdown from cities, which are avaliable on the API
