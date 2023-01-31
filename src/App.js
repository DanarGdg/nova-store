import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import LoginRegister from './pages/LoginRegister';
import OrderList from './pages/OrderList';
import PriceList from './pages/PriceList';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import './styles/App.css';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/order-list' element={<OrderList/>}/>
        <Route path='/price-list' element={<PriceList/>}/>
        <Route path='login-register' element={<LoginRegister/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='*' element={<h1>404 Not Found</h1>}/>
      </Routes>
    </div>
  );
}

export default App;