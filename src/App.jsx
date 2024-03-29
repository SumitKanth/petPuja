import React from 'react' 
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import NoPage from './components/NoPage';
import Menu from './components/Menu';
import Orders from './components/Orders';
import Food from './components/Food';
import Drink from './components/Drink';
import Cake from './components/Cake';
import Checkout from './components/Checkout';
import Signup from './components/Signup';
import Profile from './components/Profile';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <HashRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/food" element={<Food />} />
          <Route path="/drink" element={<Drink />} />
          <Route path="/cake" element={<Cake />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Toaster />
      </HashRouter>
    </>
  );
}

export default App;