import React from 'react'
import './HomePage.style.css'
import Banner from './compontents/banner/Banner'
import PopularMoviesSlide from './compontents/PopularMoviesSlide/PopularMoviesSlide'

const HomePage = () => {
  return (
    <div className='home-banner'>
      <Banner />

      <PopularMoviesSlide />
    </div>
  )
}

export default HomePage