import React from 'react'
import './Offers.css'
import exclusive_image from '../assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offer'>
      <div className="offers-left">
         <h1>Exclusive</h1>
         <h1>Offers FOR YOU</h1>
         <p>ONLY ON BEST SELLERS PRODUCTS</p>
         <button>Click Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
        
      </div>
    </div>
  )
} 

export default Offers
