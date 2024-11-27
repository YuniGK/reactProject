import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviePage />} />
          <Route path='/movies/:id' element={<MovieDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
