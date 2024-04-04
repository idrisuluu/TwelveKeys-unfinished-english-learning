import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Game from '../components/Game';
import ProfileDetails from '../components/ProfileDetails';
import { postRequest } from '../utils/requests';





const Profile = () => {

    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [valid, setValid] = useState(false);

    useEffect(() => {

        const getUser = async () => {
            const response = await postRequest('http://localhost:3000/user/getuser', { userId: id })
            if(response.user.createdAt === response.user.updatedAt){
                setValid(true);
                return;
            }
            const comparisonDate = new Date(response.user.updatedAt);
            const currentDate = new Date();
            const timeDifference = currentDate - comparisonDate;
            const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

            setValid(daysDifference >= 1);
        }

        getUser();
    }, [])
    return (
        <div className='flex items-center justify-evenly w-screen h-screen'>

            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Play Game</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Get started with today's vocabulary exercise now. Push yourself further every day</p>
                {valid ? (
                    <NavLink to='game' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Play Game
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </NavLink>

                ) : (
                    // Geçerli olmayan durumda (valid false ise) görüntülenecek içerik
                    <p className=' text-red-500'>1 günden az süre geçti veya henüz geçmedi.</p>
                )}

            </div>

            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Completed Words</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    View and review all the words you've learned so far.</p>
                <NavLink to="details" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View Profile
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </NavLink>
            </div>
        </div>
    )
}

export default Profile
