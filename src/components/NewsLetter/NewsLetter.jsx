import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='NewsLetter'>
      <h1>GET EXCLUSIVE OFFER IN YOUR EMAIL</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder='your email id' />
        <button>SUBSCRIBE</button>
      </div>
    </div>
  )
}

export default NewsLetter 
