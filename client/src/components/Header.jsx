import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import {delay, motion} from "framer-motion"
import { AppContext } from '../context/AppContext'
import {useNavigate} from 'react-router-dom'

const Header = () => {

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
    <motion.div className='flex flex-col justify-center items-center text-center my-20'
    initial = {{opacity:0.2,y:100}}
    transition={{duration : 1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}>
      <motion.div 
      initial = {{opacity:0,y:-20}}
      animate={{opacity:1, y:0}}
      transition={{delay:0.2,duration:0.8}}
      
      className='text-stone-500 dark:text-stone-300 inline-flex text-center gap-2 bg-white dark:bg-black px-6 py-1 rounded-full border border-neutral-500'>
        <p>Best Text to Image generator</p>
        <img src={assets.star_icon} alt="Star" />
      </motion.div>

      <motion.h1 
      initial = {{opacity:0}}
      animate = {{opacity:1}}
      transition={{delay:0.4, duration:2}}
      className='text-4xl max-w-[300px] sm:text-7xl max-w-[590px] mx-auto mt-10 text-center dark:text-white'>Turn Text to <span className='text-blue-700'>Image</span> in seconds</motion.h1>
      
      <motion.p
      initial = {{opacity:0,y:20}}
      animate = {{opacity:1,y:0}}
      transition={{delay:0.6,duration:0.8}}
      className='text-center max-w-xl mx-auto mt-5 dark:text-white'>Unlock your creativity with AI—transform your imagination into stunning visual art in seconds. Just type, and watch the magic unfold!</motion.p>

      <motion.button onClick={onClickHandler}
      whileHover={{scale:1.05}}
      whileTap={{scale:0.95}}
      initial = {{opacity:0}}
      animate = {{opacity:1}}
      transition={{default : {duration:0.5},opacity:{delay:0.8, duration:1}}}
      className='sm:text-lg text-white dark:text-white bg-black dark:bg-gray-600  w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full hover:scale-105 transition-all duration-300'>
        Create Images 
        <img src={assets.star_group} alt="starg" className='h-6'/>
      </motion.button>

      <motion.div 
      initial = {{opacity:0}}
      animate = {{opacity:1}}
      transition={{delay:1, duration:1}}
      className='flex flex-wrap justify-center mt-16 gap-3'>
        {Array(6).fill('').map((item,index)=>(
          <motion.img 
          whileHover={{scale:1.05, duration:0.1}}
          src={index%2 === 0? assets.sample_img_1 : assets.sample_img_2} 
          alt="samimg" 
          key={index} width={70} 
          className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10'/>
        ))}
      </motion.div>
      <motion.p 
      initial = {{opacity:0}}
      animate = {{opacity:1}}
      transition={{delay:1.2, duration:0.8}}
      className='mt-2 text-neutral-600'>Images Generated from VerseVision</motion.p>
    </motion.div>
  )
}

export default Header