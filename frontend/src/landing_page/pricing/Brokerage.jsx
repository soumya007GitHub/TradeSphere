import React from 'react'
import { MoveRight } from "lucide-react";

const Brokerage = () => {
  return (
    <div className="">
      <div className="p-5 mt-5 text-center border-top flex justify-center items-center">
        <div className="w-2/3 p-4">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Brokerage calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
          >
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="w-1/3 p-4 text-blue-500 hover:underline pt-3 ml-4">
          <a href="#" style={{ textDecoration: "none" }}>
            List of charges <MoveRight className='inline ml-2' />
            </a>
        </div>
      </div>
    </div>
  )
}

export default Brokerage