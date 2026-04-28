import React from 'react'
import {Link} from "react-router-dom";
import {Rss, Bird} from "lucide-react";

const Team = () => {
  return (
    <div className="w-full flex flex-col my-20 gap-6 px-5 md:px-10 lg:px-48">
      <div className="p-3 mt-5 border-t-1 border-gray-300">
        <h1 className="text-center text-2xl font-semibold pt-10">People</h1>
      </div>

      <div
        className="text-gray-700 flex justify-center items-center"
        style={{ lineHeight: "1.8", fontSize: "1rem" }}
      >
        <div className="w-1/2 p-3 text-center flex flex-col items-center">
          <img
            src="media/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5 text-lg font-semibold">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="w-1/2 p-3">
          <p className='my-3'>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className='my-3'>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className='my-3'>Playing basketball is his zen.</p>
          <p className='my-3'>
            Connect on <Link to="/" className='text-blue-600'>Homepage</Link> / <a href="#" className='text-blue-600'><Rss className='inline'/> TradingQnA</a> / 
            <a href="#" className='text-blue-600'><Bird className='inline'/>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Team