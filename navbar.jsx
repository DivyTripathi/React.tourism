import React from 'react'
import { NavLink } from 'react-router-dom'
// import image from './tourism.jpg'
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <NavLink to='/Home' className='navEl'>Home&nbsp;</NavLink>
                <NavLink to='/contact' className='navEl'>Contact</NavLink>
                <NavLink to='/about' className='navEl'>About</NavLink>
            </div>
        </>
    )
}

export default Navbar
