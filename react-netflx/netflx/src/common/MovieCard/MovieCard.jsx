import React from 'react'
import './MovieCard.style.css'
import { Badge } from 'react-bootstrap'
import { faPeopleGroup, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MovieCard = ({movie}) => {
  return (
    <div className='movie-card'>
      <div className='movie-img' style={{backgroundImage : "url("+`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`+")"}}></div>
     
      <div className='movie-slider-info'>
        <h2>{movie.title}</h2>
        <div className='movie-id'>
            {movie.genre_ids.map((id, idx) => (
              <Badge bg="primary" key={idx}>{id}</Badge>
            ))}
        </div>
        <div className='movie-info'>
          <div><FontAwesomeIcon icon={faThumbsUp} /> {movie.vote_average}</div>
          <div><FontAwesomeIcon icon={faPeopleGroup} /> {movie.popularity}</div>
          <div className={`adult ${movie.adult ? "adult-true" : "adult-false"}`}>{movie.adult ? '18세 이상' : '18세 이하'}</div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard