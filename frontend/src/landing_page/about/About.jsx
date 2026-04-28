import React from 'react'
import Hero from './Hero'
import Team from './Team'

const About = () => {
  return (
    <div className='w-full flex flex-col my-10 gap-6'>
      <Hero/>
      <Team/>
    </div>
  )
}

export default About