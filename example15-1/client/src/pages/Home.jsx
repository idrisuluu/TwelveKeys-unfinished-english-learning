import React from 'react'
import HomePhoto from '../assets/homephoto.png'
import { NavLink } from 'react-router-dom'
import '../styles/normalize.css'
import '../styles/twelvekeys.css'

const Home = () => {
  return (
    <div className='flex flex-col py-32'>
      <section className='h-screen flex items-center justify-center bg-center' style={{ backgroundImage: `url(${HomePhoto})` }}>
        <h1 className='text-4xl text-center uppercase text-orange-500 font-serif font-semibold'>Twelve Small Steps, big achievements</h1>
      </section>

      <section className="w-layout-blockcontainer container-2 w-container text-center mt-12">
        <h2 className='font-semibold'>TwelveKeys Daily</h2>
        <p className="text-xl"><br />In conjunction with these meticulously curated 3000 words, we hold the conviction that the most impactful method for mastering English involves consistent exposure to the language. Our website is crafted with content presented in easily comprehensible English. While our primary audience comprises individuals seeking to enhance their vocabulary, we acknowledge that initiating English learning with a focus on vocabulary is perhaps the most beneficial starting point.<br /><br />‍</p>
      </section>


      <section className="w-layout-blockcontainer container-2 w-container text-center">
        <p className="text-xl text-gray-500"><br />Today is the first day to learn all the words you need for effective English. Let's count backwards, shall we? Let me count down... 250...‍</p>
        <h2 className='font-semibold mb-12'>TwelveKeys Daily</h2>
        <NavLink to='signup' className='bg-orange-500  py-4 px-24 font-semibold font-sans '>START NOW</NavLink>
      
      
      </section>
      

    </div>
  )
}

export default Home
