import React from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import SideBar from './components/sidebar/SideBar.jsx';
import {Routes,Route} from "react-router-dom";
import Add from './pages/Add/Add.jsx';
import List from './pages/List/List.jsx';
import Orders from './pages/Orders/Orders.jsx';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const url="https://food-del-backend-yswe.onrender.com";
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <SideBar/>
      <Routes>
<Route path='/add' element={<Add url={url}/>} />
<Route path='/list' element={<List url={url}/>} />
<Route path='/orders' element={<Orders url={url}/>} />
      </Routes>
      </div>
    </div>
  )
}

export default App
