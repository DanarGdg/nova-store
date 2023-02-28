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
import EditProfile from './pages/auth/EditProfile';
import { ApiProfileProvider } from './context/api/ProfileApi';
import { ApiPriceProvider } from './context/api/PriceApi';

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
        <Route path='/price-list' 
          element={
            <ApiPriceProvider>
              <PriceList />
            </ApiPriceProvider>
          } 
        />
        <Route path='/login-register' element={<LoginRegister />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' 
          element={
            <ApiProfileProvider>
              <Profile />
            </ApiProfileProvider>
          } 
        />
        <Route path='/edit-profile' 
          element={
            <ApiProfileProvider>
              <EditProfile />
            </ApiProfileProvider>
          } 
        />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;