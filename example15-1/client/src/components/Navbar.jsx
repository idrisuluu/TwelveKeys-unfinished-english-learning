import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoPng from '../assets/Logo.png'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <div>
        <nav className=' bg-white shadow-2xl flex items-center justify-between text-bs text-gray-500 px-12'>
            <img src={LogoPng} className='w-48' onClick={(e) => Navigate('/')}/>
            <ul className='flex gap-12'>
                <li><NavLink to='login'>Login</NavLink></li>
                <li><NavLink to='signup'>Sign Up</NavLink></li>
                <li><NavLink to='3000'>3000</NavLink></li>
                <li><NavLink to='about'>About Us</NavLink></li>
                <li><NavLink to='contact'>Contact</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
