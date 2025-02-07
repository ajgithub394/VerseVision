import React from 'react'
import { assets } from '../assets/assets'
import {delay, motion} from 'framer-motion'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2 dark:text-cyan-300'>Generate AI Images</h1>
        <p className='text-gray-600 mb-8'>Turn your imagination into visuals</p>


        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <motion.img
            initial = {{opacity:0,x:-50}}
            whileInView={{opacity:1,x:0}}
            transition={{delay:0.3,duration:0.7}}
            viewport={{once:true}}
            src={assets.sample_img_2} alt="descim" className='w-80 xl:w-96 rounded-lg'/>
            <div>
                <motion.h2 
                initial = {{opacity:0,x:50}}
                whileInView={{opacity:1,x:0}}
                transition={{delay:0.4,duration:0.7}}
                viewport={{once:true}}
                className='text-3xl font-medium max-w-lg mb-4 dark:text-cyan-300'>Introducing the AI-powered Text to Image Generator</motion.h2>
                <motion.p 
                initial = {{opacity:0,y:30}}
                whileInView={{opacity:1,y:0}}
                transition={{delay:0.4,duration:0.7}}
                viewport={{once:true}}
                className='text-gray-600 dark:text-slate-400 mb-4'>
                    Effortlessly bring your ideas to life with our
                    free AI image generator. Whether you need captivating visuals or 
                    one-of-a-kind imagery, our tool transforms your text 
                    into stunning images in moments. Imagine it, describe it, 
                    and watch it come alive with just a few clicks!
                </motion.p>
                <motion.p 
                initial = {{opacity:0,y:30}}
                whileInView={{opacity:1,y:0}}
                transition={{delay:0.4,duration:0.7}}
                viewport={{once:true}}
                className='text-gray-600 dark:text-slate-400 mb-4'>
                    Just type a text prompt, and our cutting-edge AI 
                    will create high-quality images in seconds. From product visuals
                    and character designs to portraits and imaginative 
                    concepts that don't yet exist—everything can be 
                    visualized effortlessly. Powered by advanced AI technology, 
                    the creative possibilities are endless!
                </motion.p>
            </div>
        </div>
    </div>
  )
}

export default Description