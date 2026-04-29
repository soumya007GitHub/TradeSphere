import React from 'react'
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Hero from './Hero';
import Universe from './Universe';

const Products = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-5 md:px-10 lg:px-48 mt-20 mb-20">
        <Hero/>
       <LeftSection
        imageURL="media/kite.png"
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
      />
      <RightSection
        imageURL="media/console.png"
        productName="Console"
        productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
      />
      <LeftSection
        imageURL="media/coin.png"
        productName="Coin"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
      />
      <RightSection
        imageURL="media/kiteconnect.png"
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
      />
      <LeftSection
        imageURL="media/varsity.png"
        productName="Varsity mobile"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
      />
      <p className="text-center my-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <Universe/>
    </div>
  )
}

export default Products