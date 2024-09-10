import React from 'react'

function Email() {
  return (
    <div className='max-w-[1240px] text-white py-6 my-11'>
      <div className='grid grid-cols-3 py-6 '>
        <div className='col-span-2 '>
          <h1 className='lg:text-4xl md:text-3xl sm:2xl text-xl font-bold py-2 justify-center'>  Want tips & tricks to optimize your flow?</h1>
          <p className='py-3'> Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='col-span-1 flex flex-col sm:flex-row justify-between items-center w-full'>
          <input className=' p-3 text-black rounded-md' type='email' placeholder='Enter your email' />
          <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
            
          </div>
         
          
      </div>
      <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#00df9a]'>Privacy Policy.</span>
          </p>
    </div>
  )
}

export default Email