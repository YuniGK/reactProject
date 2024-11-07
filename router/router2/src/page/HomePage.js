import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate();
    const goToPage = () => {
        navigate('/about');
    }

  return (
    <div>
        <h3>HomePage</h3>
        <Link to="/about">About page</Link>
        < button onClick={goToPage}>About page</button>
    </div>
  )
}

export default HomePage