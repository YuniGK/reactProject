import React from 'react'

import { Button, ButtonGroup } from 'react-bootstrap';

const WeatherButton = ({getWeatherByCurrentLocation}) => {
  // https://react-bootstrap.netlify.app/docs/components/buttons

  const clickCity = (lat, lon) => {
    getWeatherByCurrentLocation(lat, lon);
  };

  return (
    <div className='weather-btn'>
      <ButtonGroup aria-label="Basic example">
          <Button variant="dark" onClick={()=>clickCity(37.4571706, 126.8824476)} >현재 주소</Button>
          <Button variant="dark" onClick={()=>clickCity(40.697538, -74.3100268)} >뉴욕</Button>
          <Button variant="dark" onClick={()=>clickCity(48.8589383, 2.2644621)} >파리</Button>
        </ButtonGroup>
    </div>
  )
}

export default WeatherButton