import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import {postRequest} from '../utils/requests'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const Navigate = useNavigate();

    const [user,setUser] = useState({
        email:"",
        password:""
    });

    const handleInputForm = (event) => {

        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const submitHandle = async(event) => {
        event.preventDefault();
        const response = await postRequest('http://localhost:3000/user/login',user);
        if(response?.message === "ok"){
            Navigate(`/profile/${response?.userID}`)
        }
    }
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onChange={handleInputForm} onSubmit={submitHandle}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>

                        <button type="submit" className="w-full bg-red-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <NavLink to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</NavLink>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
