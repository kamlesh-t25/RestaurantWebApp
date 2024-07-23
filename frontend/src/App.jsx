import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Cart from './pages/Cart/cart';
import PlaceOrder from './pages/PlaceOrder/placeOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Verify from './pages/Verify/Verify';
import MyOrders from './pages/MyOrders/MyOrders';

const App = () => {
  const [loginPopup,setLoginPopup]=useState(false);

  return (
  <div>
    {loginPopup?<LoginPopup setLoginPopup={setLoginPopup}/>:""}
  <>
    <div className='app'>
      <Navbar setLoginPopup={setLoginPopup}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<MyOrders/>} />
      </Routes>
    </div>
    <Footer/>
  </>
  </div>
    
  )
}

export default App
