import React from 'react'
import laptop from '../assets/laptop.jpg'
function Analytics() {
  return (
    <div className='bg-white  z-10 w-full'> 
    <div className='max-w-[1240px]  mx-auto grid md:grid-cols-2 justify-center px-5 '>
      <img src={laptop} alt='laptop' className='w-[500px] mx-auto my-4 ' />
      <div className='flex flex-col justify-center px-6'>
      <p className='text-[#00df9a] text-bold'>DATA ANALYTICS DASHBOARD</p>
      <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <div>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>Get Started</button>
          </div>
      </div>
    </div>

    </div>
  )
}

export default Analytics