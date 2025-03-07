import React, { useContext } from 'react'
import {assets} from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = ({p}) => {

  const {user, setShowLogin, logout, credit} = useContext(AppContext);
  //to navigate to the buy credits page
  const navigate = useNavigate();
  return (
    <div className='flex items-center justify-between py-4'>
        <Link to='/'>
            <p className='font-semibold text-black dark:text-white text-3xl'>VerseVision</p>
        </Link>

        <div>
            {user ?
            <div className='flex items-center gap-2 sm:gap-3'>
                <button onClick={()=>navigate('/buy')} className='flex items-center gap-2 bg-blue-100 dark:bg-blue-900 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
                    <img src={assets.credit_star} alt="Credits" className='w-5'/>
                    <p className='text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200'>Credits Left : {credit}</p>
                </button>
                <p className='text-gray-700 dark:text-gray-200 max-sm:hidden pl-4'>Hi, {user.name}</p>
                <div className='relative group'>
                    <img src={assets.profile_icon} alt="" className='w-10 drop-shadow'/>
                    <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black dark:text-white rounded pt-12'>
                        <ul className='list-none m-0 p-2 bg-white dark:bg-black rounded-md border text-sm'>
                            <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
            :
            <div className='flex items-center gap-2 sm:gap-5'>
                <p onClick = {()=>navigate('/buy')} className='cursor-pointer dark:text-white'>Pricing</p>
                <button onClick={()=>setShowLogin(true)} className='bg-zinc-800 dark:bg-gray-100 text-white dark:text-gray-900  px-7 py-2 sm:px-10 text-sm rounded-full'>Login</button>
            </div>
            } 
        </div>
        <button className='bg-zinc-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full px-1' onClick={p}>
            Dark/Light
        </button>
    </div>
  )
}

export default Navbar