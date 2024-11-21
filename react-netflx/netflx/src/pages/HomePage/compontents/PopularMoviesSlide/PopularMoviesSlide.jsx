import React, { useState } from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import ClipLoader from "react-spinners/ClipLoader";
import {Alert} from 'react-bootstrap';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './PopularMoviesSlide.style.css'
import MovieCard from '../MovieCard/MovieCard';

const PopularMoviesSlide = () => {
    let [loading, setLoading] = useState(true);
    const {data, isLoading, isError, error} = usePopularMoviesQuery();

    if(isLoading){
      <ClipLoader
        color="#000"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    }

    if(isError){
      <Alert key="danger" variant="danger">{error.message}</Alert>
    }

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 8,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
      };

  return (
    <div>
        <h3 className='title'>인기 영화</h3>
        <Carousel
            infinite={true}
            autoPlaySpeed={1000}
            customTransition="all .5"
            transitionDuration={500}
            centerMode={true}
            itemClass="movie-slider p-1"
            containerClass='carousel-container'
            responsive={responsive}
            >
            
            {data?.results.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}
        </Carousel>
    </div>
  )
}

export default PopularMoviesSlide