import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} /> 
        <Route path='/about' element={<AboutPage />} />
      </Routes>      
    </div>
  );
}

export default App;
