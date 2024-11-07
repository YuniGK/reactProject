import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import ProdcutPage from './page/ProdcutPage';
import ProdcutDetailPage from './page/ProdcutDetailPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} /> 
        <Route path='/about' element={<AboutPage />} />
        <Route path='/products' element={<ProdcutPage />} />
        <Route path='/products/:id' element={<ProdcutDetailPage />} />
      </Routes>      
    </div>
  );
}

export default App;
