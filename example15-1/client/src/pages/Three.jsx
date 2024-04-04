import React from 'react'
import { NavLink } from 'react-router-dom'
const Three = () => {
    return (
        <div className='flex items-center justify-center flex-col pb-24'>
            <section className='h-screen/2 bg-black flex items-center justify-center text-center w-full'>
                <h1 className=' text-6xl text-orange-500'>3000 LOGIC</h1>
            </section>

            <section className='mt-24 text-center px-48'>

                <h1 className=' text-4xl text-gray-900 font-sans'>Understand our logic</h1>
                <p className='text-gray-400 text-center text-xl mt-12'>

                    In conjunction with these meticulously curated 3000 words, we hold the conviction that the most impactful method for mastering English involves consistent exposure to the language. Our website is crafted with content presented in easily comprehensible English. While our primary audience comprises individuals seeking to enhance their vocabulary, we acknowledge that initiating English learning with a focus on vocabulary is perhaps the most beneficial starting point.

                    TwelveKeys aims to increase your English vocabulary based on scientific methods. It takes as reference the 3000-word English word list published by the Oxford Dictionary.

                    Oxford 3000 has been chosen by language experts and experienced Oxford teachers as key words that should be given priority when learning English.

                    TwelveKeys aims to teach you 12 new English words ​​every day. Why 12 ?
                    According to various studies conducted by experts and linguists, learning 12 words per day is considered the most optimal choice on average when acquiring English skills.
                    ‍
                </p>
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

export default Three
