import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import OrderList from './pages/OrderList';
import PriceList from './pages/PriceList';
import './styles/App.css';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/order-list' element={<OrderList/>}/>
        <Route path='/price-list' element={<PriceList/>}/>
      </Routes>
    </div>
  );
}

export default App;