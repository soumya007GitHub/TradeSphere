import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center">
        <img src="media/homeHero.png" alt="Hero Image" className='mb-5'/>
        <h1 className='mt-5 font-bold text-3xl text-gray-800'>Invest in everything</h1>
        <p className='text-gray-700 mt-3'>Online Platform to invest in stocks, derivates, mutual funds, and more</p>
        <button className='w-1/4 bg-blue-500 text-white rounded py-2 my-3 hover:bg-blue-600'>Signup Now</button>
      </div>
    </div>
  )
}

export default Hero