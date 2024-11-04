import { useEffect, useState } from 'react';
import './App.css';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [] = useState();
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    let response = await fetch(url);
    let data = await response.json();
    
    console.log('data ',data)
  }

  //현재위치 기반의 날씨를 가져온다.
  useEffect(()=>{
    getCurrentLocation();
  }, [])

  return (
    <div>
    </div>
  );
}

export default App;
