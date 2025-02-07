import React, { useContext, useEffect, useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import BuyCredit from './pages/BuyCredit'
import Home from './pages/Home'
import Result from './pages/Result'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/ReactToastify.css';



const App = () => {

  const {showLogin} = useContext(AppContext);

  const [darkOn, setDarkOn] = useState(true);
  useEffect(()=>{
    if(darkOn){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  })
  const handleClick = ()=>{
    setDarkOn(!darkOn);
  }
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-white dark:bg-slate-950'>
      <ToastContainer position='bottom-right'/>
      <Navbar p={handleClick}/>
      {showLogin && <Login/>}
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/result' element = {<Result/>}/>
        <Route path='/buy' element = {<BuyCredit/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App