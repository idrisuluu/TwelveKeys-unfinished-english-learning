import React from 'react'
import { NavLink } from 'react-router-dom'
import idris from '../assets/idris.png'
import berkay from '../assets/berkay.png'
const About = () => {
    return (
        <div className='flex items-center justify-center flex-col pb-24'>
            <section className='h-screen/2 bg-black flex items-center justify-center text-center w-full'>
                <h1 className=' text-6xl text-orange-500'>ABOUT US</h1>
            </section>

            <section className='mt-24 text-center px-48'>

                <h1 className=' text-4xl text-gray-900 font-sans'>TwelveKeys Team</h1>
                <p className='text-gray-400 text-center text-xl mt-12'>

                    We are a project that firmly believes in the indispensability of English rather than viewing it as a mere choice. Our mission is to impart essential vocabulary in the most effective manner to individuals facing challenges in learning English words. In pursuit of this goal, we adhere to scientific principles, striving to cater to individuals of all age groups.

                    Comprising three dedicated members, our team consists of senior students from WSB Merito University. In addition to our academic pursuits, we actively contribute to the dynamic field of the software industry.
                    ‍
                </p>
            </section>

            <section className='flex gap-32'>
                <img src={idris} />
                <img src={berkay} />
                
            </section>

            <section className='mt-24 text-center px-48 flex flex-col items-center justify-center'>

                <h1 className=' text-4xl text-gray-900 font-sans'>Time to start learning</h1>
                <p className='text-gray-400 text-center text-xl mt-12 mb-12'>

                    Today is the first day to learn all the words you need for effective English. Let's count backwards, shall we? Let me count down... 250...
                    ‍
                </p>
                <NavLink to='/signup' className='bg-orange-500  py-4 px-24 font-semibold font-sans '>START NOW</NavLink>

            </section>

        </div>
    )
}

export default About
