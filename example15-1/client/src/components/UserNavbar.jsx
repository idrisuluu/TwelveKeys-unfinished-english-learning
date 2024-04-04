import React from 'react'

const UserNavbar = () => {
  return (
    <div>
        <nav className=' bg-gray-400 shadow-2xl flex items-center justify-center text-2xl'>
            <ul className='flex gap-12'>
                <li><NavLink to='login'>Play</NavLink></li>
                <li><NavLink to='signup'>Sign Up</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default UserNavbar
