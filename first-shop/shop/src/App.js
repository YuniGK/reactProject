import { Navigate, Route, Routes } from 'react-router';
import './App.css';
import '../src/css/init.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';

function App() {
  //true - 로그인 함 / false - 로그인 안됨
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(()=>{    

  },[authenticate]);

  //로그인 및 접근 권한이 설정되어 있는 페이지 접속 방지
  const PrivateRoute = () => {
    return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />
  }

  return (
    <div>
      <Navbar setAuthenticate={setAuthenticate} authenticate={authenticate} />
      <Routes>
        <Route path='/' element={<ProductAll />} / >
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />} / >
        <Route path='/product/:id' element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
