import React from 'react'

const Universe = () => {
    return (
        <div className="w-full flex justify-center items-center gap-4 my-10">
            <div className="row text-center">
                <h2 className="text-2xl font-bold text-gray-800">The Zerodha Universe</h2>
                <p>
                    Extend your trading and investment experience even further with our
                    partner platforms
                </p>
                <div className='flex justify-between items-center my-3'>
                    <div className="w-1/3 p-3 mt-5 flex flex-col justify-center items-center">
                        <img className="w-1/2" src="media/smallcaseLogo.png" />
                        <p className="text-small text-muted">Thematic investment platform</p>
                    </div>
                    <div className="w-1/3 p-3 mt-5 flex flex-col justify-center items-center">
                        <img className="w-1/2" src="media/streakLogo.png" />
                        <p className="text-small text-muted">Algo & strategic platform</p>
                    </div>
                    <div className="w-1/3 p-3 mt-5 flex flex-col justify-center items-center">
                        <img className="w-1/2" src="media/sensibullLogo.svg" />
                        <p className="text-small text-muted">Options trading platform</p>
                    </div>
                </div>
                <div className='flex justify-between items-center my-3'>
                    <div className="w-1/3 p-3 mt-5 flex flex-col justify-center items-center">
                        <img className="w-1/2" src="media/zerodhaFundhouse.png" />
                        <p className="text-small text-muted">Asset management</p>
                    </div>
                    <div className="w-1/3 p-3 mt-5 flex flex-col justify-center items-center">
                        <img className="w-1/2" src="media/goldenpiLogo.png" className=''/>
                        <p className="text-small text-muted">Bonds trading platform</p>
                    </div>
                    <div className="w-1/3 p-3 mt-5 flex flex-col justify-center items-center">
                        <img className="w-1/2" src="media/dittoLogo.png" />
                        <p className="text-small text-muted">Insurance</p>
                    </div>
                </div>
                <button
                    className="px-4 py-2 bg-blue-600 rounded text-white my-5"
                >
                    Signup Now
                </button>
            </div>
        </div>
    )
}

export default Universe