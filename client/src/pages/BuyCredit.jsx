import React, { useContext, useState } from 'react';
import { plans, assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

const BuyCredit = () => {
  const { user } = useContext(AppContext);

  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <motion.button 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
        className='border border-gray-400 dark:border-gray-200 dark:text-white px-10 py-2 rounded-full mb-6'
      >
        Our Plans
      </motion.button>
      
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
        className='text-center text-3xl dark:text-white font-medium mb-6 sm:mb-10'
      >
        Choose the plan
      </motion.h1>

      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item, index) => (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            key={index} 
            className='bg-white dark:bg-gray-700 drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500'
          >
            <img width={40} src={assets.logo_icon} alt="icon" />
            <p className='mt-3 mb-1 dark:text-white font-semibold'>{item.id}</p>
            <p className='text-sm dark:text-white'>{item.desc}</p>
            <p className='mt-6 dark:text-white'>
              <span className='text-3xl font-medium'>${item.price}</span> / {item.credits} credits
            </p>
            <button 
              className='w-full bg-gray-800 dark:bg-blue-400 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'
            >
              {user ? 'Select Plan' : 'Get Started'}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
