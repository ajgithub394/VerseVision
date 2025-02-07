import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const GenerateButton = () => {
  const {user,setShowLogin} = useContext(AppContext);
  const navigate = useNavigate();
  const onClickHandler = ()=>{
    if(user){
      navigate('/result');
    }
    else{
      setShowLogin(true);
    }
  }

  return (
    <div className='pb-16 text-center'>
        <motion.h1 
        initial = {{opacity:0,x:-50}}
        whileInView={{opacity:1,x:0}}
        transition={{delay:0,duration:0.7}}
        viewport={{once:true}}
        className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 dark:text-cyan-300 py-6 md:py-16'>See the Magic. Try it now!</motion.h1>

        <motion.button 
        onClick={onClickHandler}
        initial = {{opacity:0,x:50}}
        whileInView={{opacity:1,x:0}}
        transition={{delay:0,duration:0.3}}
        viewport={{once:true}}
        className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black dark:bg-gray-600 text-white dark:text-white m-auto hover:scale-105 transition-all duration-500'>Generate Images
            <img src={assets.star_group} alt="sgr" className='h-6'/>
        </motion.button>
    </div>
  )
}

export default GenerateButton