import React from 'react'
import Hero from './Hero'
import Brokerage from './Brokerage'

const Pricing = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center px-5 md:px-10 lg:px-48 mt-20 mb-20'>
      <Hero />
      <Brokerage/>
    </div>
  )
}

export default Pricing