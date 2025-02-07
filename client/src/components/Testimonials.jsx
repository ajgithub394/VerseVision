import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import {motion} from 'framer-motion'

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center justify-center my-20 py-12'>
        <motion.h1 
        initial = {{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.3,duration:0.7}}
        viewport={{once:true}}
        className='text-3xl sm:text-4xl font-semibold mb-2 dark:text-cyan-300'>Customer Reviews</motion.h1>
        <p 
        initial = {{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.4,duration:0.7}}
        viewport={{once:true}}
        className='text-gray-600 mb-12'>What our users say about us</p>

        <div className='flex flex-wrap gap-6'>
            {testimonialsData.map((testimonial,index)=>(
                <motion.div 
                initial = {{opacity:0,y:-50}}
                whileInView={{opacity:1,y:0}}
                transition={{delay:0.4,duration:0.7}}
                viewport={{once:true}}
                key={index} 
                className='bg-white/20 dark:text-amber-300 p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all'>
                    <div className='flex flex-col items-center'>
                        <img src={testimonial.image} alt="ti" className='rounded-full w-14'/>
                        <h2 className='text-xl font-semibold mt-3'>{testimonial.name}</h2>
                        <p className='text-gray-500 mb-4'>{testimonial.role}</p>
                        <div className='flex mb-4'>
                            {Array(testimonial.stars).fill().map((item,index)=>(
                                <img key={index} src={assets.rating_star} alt="" className='border'/>
                            ))}
                        </div>
                        <p className='text-center text-sm text-gray-600 dark:text-gray-300'>{testimonial.text}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials