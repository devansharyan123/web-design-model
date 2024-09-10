import React from 'react';
import { ReactTyped } from "react-typed";
function Hero() {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[96px] h-screen w-full mx-auto flex flex-col'>
            <p className='font-bold text-[#00df9a]'> GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md-py-6'>GROW WITH DATA</h1>
            <div className='flex justify-center'>
            <p className='md:text-4xl sm:text-2xl text-xl font-bold '>FAST FLEXIBLE FINANCING FOR </p>
             <ReactTyped  className='md:text-4xl sm:text-2xl text-xl font-bold px-3 ' strings={['BTB','BTC','SASS']} typeSpeed={300}  backSpeed={100} loop />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 py-2'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero