import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import LoginRegister from './pages/LoginRegister';
import OrderList from './pages/OrderList';
import PriceList from './pages/PriceList';
import Register from './pages/auth/Register';
import './styles/App.css';
import { ApiHomeProvider } from './context/api/homeApi';
import DetailGame from './components/DetailGame';
import { DetailGameProvider } from './context/app/ContextDetailGame';
import Profile from './pages/auth/Profile';
import Login from './pages/auth/Login';
import { ApiOrderListProvider } from './context/api/OrderListApi';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/'
          element={
            <ApiHomeProvider>
              <Home />
            </ApiHomeProvider>}
        />
        <Route path='/detail-game/:id'
          element={
            <DetailGameProvider>
              <DetailGame />
            </DetailGameProvider>
          }
        />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/order-list' 
          element={
            <ApiOrderListProvider>
              <OrderList />
            </ApiOrderListProvider>
          } 
        />
        <Route path='/price-list' element={<PriceList />} />
        <Route path='/login-register' element={<LoginRegister />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;