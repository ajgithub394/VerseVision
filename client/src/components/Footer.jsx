import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex gap-2 pb-2'>
        <p className='font-semibold text-2xl dark:text-white'>VerseVision</p>

        <div className='flex justify-start gap-2 border-l-2 ml-3'>
            <img src={assets.fb_icon} alt="" className='h-9 w-9'/>
            <img src={assets.insta_icon} alt="" className='h-9 w-9'/>
            <img src={assets.x_icon} alt="" className='h-9 w-9'/>
        </div>
    </div>
  )
}

export default Footer