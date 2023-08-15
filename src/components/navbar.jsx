import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <div className="heading">
        <h1>SayNoToFoodWaste</h1>
        <img src="https://media.tenor.com/8Dr6NEjB9K4AAAAC/nope-no.gif" alt="img" />
        </div>
        <ul className='links'>
          <Link to={'/'}>
            <l1 className='linkitem'>Home</l1>
            </Link>
            <Link to={'/aboutus'}>
            <l1 className='linkitem'>About Us</l1>
            </Link>
            <Link to={'/reachus'}>
            <l1 className='linkitem'>Reach Us</l1>
            </Link>
            <Link to={'/donate'}>
            <l1 className='linkitem'>Donate</l1>
            </Link>
        </ul>
      </div>
    </>
  )
}

export default Navbar
