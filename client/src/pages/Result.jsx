import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets';
import {motion} from 'framer-motion';
import {AppContext} from '../context/AppContext'

const Result = () => {
  const [image,setImage] = useState(assets.sample_img_1);
  const [isImageLoaded,setIsImageLoaded] = useState(false);
  const [loading,setLoading] = useState(false);
  const [input,setInput] = useState('');

  //getting the generateImage function from the App Context
  const {generateImage} = useContext(AppContext);

  const onSubmitHandler = async (e)=>{
    //finish later while doing backend
    e.preventDefault();
    setLoading(true);

    if(input){
      const image = await generateImage(input);
      if(image){
        setIsImageLoaded(true);
        setImage(image);
      }
    }
    setLoading(false);
  }

  return (
    <form onSubmit = {onSubmitHandler} className='flex flex-col min-h-[90vh] justify-center items-center'>
      <div>
        <div className='relative'>
          <img src={image} alt="samp" className='max-w-sm rounded'/>
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500
          ${loading ? 'w-full transition-all durartion-[10s]':'w-0'}`}/>
        </div>
        <p className={!loading? 'hidden' : 'dark:text-gray-700'}>Creating....</p>
      </div>

      {
        !isImageLoaded &&
        <motion.div
        initial = {{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.3,duration:0.7}}
        viewport={{once:true}}
        className='flex w-full max-w-xl bg-neutral-500 dark:bg-gray-700 text-white text-sm p-0.5 mt-10 rounded-full'>
          <motion.input 
          initial = {{opacity:0,x:-20}}
          whileInView={{opacity:1,x:0}}
          transition={{delay:0.3,duration:0.7}}
          viewport={{once:true}}
          onChange = {e => setInput(e.target.value)} value={input} type="text" placeholder='Describe your Imagination here' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color'/>
          <motion.button 
          initial = {{opacity:0,x:20}}
          whileInView={{opacity:1,x:0}}
          transition={{delay:0.3,duration:0.7}}
          viewport={{once:true}}
          type='submit' className='bg-zinc-900 dark:bg-zinc-50 px-10 sm:px-16 py-3 rounded-full text-white dark:text-black'>Generate</motion.button>
        </motion.div> 
      }
      {
        isImageLoaded &&
        <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
          <motion.p 
          initial = {{opacity:0,x:-20}}
          whileInView={{opacity:1,x:0}}
          transition={{delay:0.3,duration:0.7}}
          viewport={{once:true}}onClick={()=>{
            setIsImageLoaded(false);
          }}
          className='bg-transparent border border-zinc-900 dark:border-white dark:bg-zinc-900 text-black dark:text-white px-8 py-3 rounded-full cursor-pointer'>Generate Another</motion.p>
          <motion.a 
          initial = {{opacity:0,x:20}}
          whileInView={{opacity:1,x:0}}
          transition={{delay:0.3,duration:0.7}}
          viewport={{once:true}}
          href={image} download className='bg-zinc-900 border px-10 py-3 rounded-full cursor-pointer'>Download</motion.a>
        </div>
      }
    </form>
  )
}

export default Result