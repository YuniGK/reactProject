import React, { useEffect, useState } from 'react'
import './Banner.style.css'
import { useDispatch, useSelector } from 'react-redux';
import { popularMovies } from '../../../../redux/reducers/moviesSlice';

const Banner = () => {
    const dispatch = useDispatch();
    const {movieList} = useSelector((state)=>state.movie);

    console.log(movieList)

    useEffect(()=>{
      dispatch(popularMovies);
    },[]);
  
  return (
    <></>
  )
}

export default Banner