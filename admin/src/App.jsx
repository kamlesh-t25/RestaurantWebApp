import React from 'react'
import {Routes ,Route} from 'react-router-dom';
import Add from './Pages/Add/Add';
import List from './Pages/List/List';
import Orders from './Pages/Orders/Orders';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import './App.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const URL="http://localhost:4000";

  return (
    <>
    <ToastContainer />
    <Navbar/>
    <div className='app'>
      <Sidebar/>
      <Routes>
        <Route path='/add' element={<Add URL={URL}/>} />
        <Route path='/list' element={<List URL={URL}/>} />
        <Route path='/orders' element={<Orders URL={URL}/>} />
      </Routes>
    </div>
    </>
    )
}

export default App
