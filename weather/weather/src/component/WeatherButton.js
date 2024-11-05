import React from 'react'

import { Button, ButtonGroup } from 'react-bootstrap';

const WeatherButton = ({cityList, setCity}) => {
  // https://react-bootstrap.netlify.app/docs/components/buttons

  return (
    <div className='weather-btn'>      
      <ButtonGroup aria-label="Basic example">           
        {cityList?.map((item, idx) => (
            <Button variant="dark" key={idx} onClick={()=>{setCity(item)}} >
              {item}
            </Button>  
        ))}
      </ButtonGroup>
    </div>
  )
}

export default WeatherButton