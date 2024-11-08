import { Route, Routes } from 'react-router';
import './App.css';
import '../src/css/init.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import { useState } from 'react';

function App() {
  //true - 로그인 함 / false - 로그인 안됨
  const [authenticate, setAuthenticate] = useState(false);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductAll />} / >
        <Route path='/login' element={<Login />} / >
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
