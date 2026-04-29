import React from 'react'
import { MoveRight } from "lucide-react";

const Hero = () => {
    return (
        <div className="text-center mt-5 p-3 text-gray-700 ">
            <h2 className="text-2xl font-bold text-gray-800">Technology</h2>
            <h3 className="mt-3 fl-4">
                Sleek, modern and intuitive trading platforms
            </h3>
            <p className="mt-3 mb-5">
                Check out our
                <a href="#" className='text-blue-500 hover:underline pt-3 pl-2'>
                    investment offerings
                    <MoveRight className='inline ml-2' />
                </a>
            </p>
        </div>
    )
}

export default Hero