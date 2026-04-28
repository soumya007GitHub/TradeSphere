import React from 'react'

const Awards = () => {
  return (
    <div className="w-full flex my-10 gap-6">
    <div className="w-1/2 mt-20">
    <img src="media/largestBroker.svg" alt="Largest Broker" className='w-[90%]'/>
    </div>
    <div className="w-1/2 mt-20 flex flex-col items-center justify-center">
      <h2 className='text-2xl font-bold text-gray-800'>Largest stock broker in India</h2>
      <p className="mt-3 mb-5 text-gray-800">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="w-full flex items-center">
            <div className="w-1/2 text-gray-700">
              <ul className='list-disc'>
                <li className='my-2'>
                  <p>Futures and Options</p>
                </li>
                <li className='my-2'>
                  <p>Commodity derivatives</p>
                </li>
                <li className='my-2'>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="w-1/2 text-gray-700">
              <ul className='list-disc'>
                <li className='my-2'>
                  <p>Stocks & IPOs</p>
                </li>
                <li className='my-2'>
                  <p>Direct mutual funds</p>
                </li>
                <li className='my-2'>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/pressLogos.png" alt="Press Image" className='mt-5'/>
    </div>
    </div>
  )
}

export default Awards