import React from 'react'

const Hero = () => {
  return (
    <div className="w-full flex flex-col my-20 mb-0  gap-6 px-5 md:px-10 lg:px-48">
      <div className="p-5 pb-20 mt-5 mb-5 border-b-1 border-gray-300">
        <h2 className="fl-2 text-center font-semibold text-2xl text-gray-800">
          We pioneered the discount broking model in India
          <br />
          Now, we are breaking ground with our technology.
        </h2>
      </div>
      <div
        className="pt-10 border-top text-gray-700 flex"
        style={{ lineHeight: "1.8", fontSize: "1rem" }}
      >
        <div className="w-1/2 p-5">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="w-1/2 p-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="#" className='text-blue-500'>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero