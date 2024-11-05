import { useEffect, useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [weather, setWeather] = useState(null);

  const cityList = [
    {"name" : "Current City", lat : 37.4571706, lon : 126.8824476}
    , {"name" : "New York", lat : 40.697538, lon : -74.3100268}
    , {"name" : "Paris", lat : 48.8589383, lon : 2.2644621}
  ]

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      console.log(lat, lon)

      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    let response = await fetch(url);
    let data = await response.json();
    
    setWeather(data);
  }

  //현재위치 기반의 날씨를 가져온다.
  useEffect(()=>{
    getCurrentLocation();
  }, [])

  return (
    <div>
      <div className='contenter-box'>
        <div className='weather-box'>
          <WeatherBox weather={weather} />
          <WeatherButton getWeatherByCurrentLocation = {getWeatherByCurrentLocation} />
        </div>
      </div>
    </div>
  );
}

export default App;
