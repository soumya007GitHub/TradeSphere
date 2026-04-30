import React from 'react'

const Hero = () => {
    return (
        <section className="flex flex-col justify-between items-center bg-blue-500 pt-20 text-white px-5 md:px-10 lg:px-48 w-full" id="supportHero">
            <div className="m-3 w-full gap-6 flex justify-between">
                <div className="w-1/2 p-3 flex flex-col items-start justify-between">
                    <h4 className="text-2xl font-bold">Support Portal</h4>
                    <h5 className="fs-3">
                        Search for an answer or browse help topics to create a ticket
                    </h5>
                    <input placeholder="Eg. how do I activate F&O" />
                    <br />
                    <a href="#" className='my-1'>Track account opening</a>
                    <a href="#" className='my-1'>Track segment activation</a>
                    <a href="#" className='my-1'>Intraday margins</a>
                    <a href="#" className='my-1'>Kite user manual</a>
                </div>
                <div className="w-1/2 p-3 flex flex-col items-start ">
                    <h4 className="text-2xl font-bold">Track Tickets</h4>
                    <h5 className="my-1">Featured</h5>
                    <a href="#" className='my-1'>Current Takeovers and Delisting - January 2026</a>
                    <a href="#" className='my-1'>Latest Intraday leverages - MIS & CO</a>
                </div>
            </div>
        </section>
    )
}

export default Hero