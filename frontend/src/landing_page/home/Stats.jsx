import React from 'react'
import {MoveRight} from "lucide-react";

const Stats = () => {
  return (
    <div className="w-full flex justify-center items-center my-10 gap-6 text-gray-700">
    <div className='w-1/2 my-20'>
     <h2 className='text-2xl font-bold text-gray-800 mb-10'>Trust with confidence</h2>
          <h2 className='text-xl font-semibold text-gray-800'>Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
          <h2 className='text-xl font-semibold text-gray-800 mt-5'>No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className='text-xl font-semibold text-gray-800 mt-5'>The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className='text-xl font-semibold text-gray-800 mt-5'>Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
    </div>
    <div className='w-1/2 my-20'>
    <img src="media/ecosystem.png" className="w-full"/>
          <div className="flex justify-evenly items-center mt-5">
            <a href="#" className='text-blue-500 hover:underline'>
              Explore our products
              <MoveRight className='inline ml-2'/>
            </a>
            <a href="#" className='text-blue-500 hover:underline'>
              Try Kite demo
              <MoveRight className='inline  ml-2'/>
            </a>
          </div>
    </div>
    </div>
  )
}

export default Stats