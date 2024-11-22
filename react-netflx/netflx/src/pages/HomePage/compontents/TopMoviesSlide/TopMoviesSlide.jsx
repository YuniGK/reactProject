import React, { useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import {Alert} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import { useTopMovies } from '../../../../hooks/useTopMovies';
import './TopMoviesSlide.style.css'

const PopularMoviesSlide = () => {
    let [loading, setLoading] = useState(true);
    const {data, isLoading, isError, error} = useTopMovies();

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
          items: 6,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
      };

  return (
    <div className='top-movies'>
        <h3 className='title'>최고평점 영화</h3>
        <Carousel
            infinite={true}
            autoPlaySpeed={800}
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