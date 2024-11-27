import React, { useEffect, useState } from 'react'
import './HomePage.style.css'
import { useDispatch, useSelector } from 'react-redux';
import { popularMovies } from '../../redux/reducers/moviesSlice';

const HomePage = () => {
  const [loaing, setLoaing] = useState(false);
  const dispatch = useDispatch();

  const movieList = useSelector((state) => state.movie.movieList);

  console.log('movieList',movieList)

  useEffect(()=>{
    dispatch(popularMovies());
  }, []);

  return (
    <div>HomePage</div>
  )
}

export default HomePage