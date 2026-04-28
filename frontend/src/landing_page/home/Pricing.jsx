import React from 'react'
import {MoveRight} from "lucide-react";

const Pricing = () => {
  return (
    <div className="my-10 gap-6 text-gray-700">
      <div className="w-full flex flex-row items-center">
        <div className="w-1/4">
          <h2 className='text-2xl font-bold text-gray-800'>Unbeatable pricing</h2>
          <p className="pt-5 pb-2">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#"  className='text-blue-500 hover:underline'>
            See Pricing 
            <MoveRight className='inline ml-2'/>
          </a>
        </div>
        <div className="w-1/4"></div>
        <div className="w-2/4">
          <div className="text-center flex  justify-center gap-4">
            <div className="w-1/2 p-3 border border-gray-300 rounded">
              <h2 className="mb-3 text-xl font-semibold">₹0</h2>
              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="w-1/2 p-3 border border-gray-300 rounded">
              <h2 className="mb-3 text-xl font-semibold">₹20</h2>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing