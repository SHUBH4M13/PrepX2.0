import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const LOGIN_URL = "http://localhost:8080/login";
    const Navigate = useNavigate();

    const GoToSignup = () => {
        Navigate("/signup")
    }

    const GoToHome = () => {
        Navigate("/")
    }

    const GoToforgotpassword = () => {
        Navigate("/forgotpassword")
    }

    const [isLoading , setisloading ] = useState(false)

  return (
    <div className="bg-darkbg min-h-screen flex justify-center items-center p-4">
    <div className="bg-Secondarybg rounded-xl w-full max-w-[450px] sm:w-[450px] p-6 shadow-lg">
        <div className="text-center">
            <p className="font-bold text-white text-2xl">Welcome to PrepX</p>
            <p className="py-2 text-dullwhite">Login to continue</p>
        </div>

        <div className="flex justify-evenly mt-4">
            <div className="w-1/2 text-center border-b-2 pb-2 cursor-pointer border-PrimaryGold text-PrimaryGold">
                Login
            </div>
            <div onClick={GoToSignup} className="w-1/2 text-center border-b-2 pb-2 cursor-pointer border-dullwhite text-dullwhite hover:border-white hover:text-white">
                Sign Up
            </div>
        </div>

        <form className="flex flex-col mt-6 space-y-4" >
            <div>
                <p className="text-dullwhite text-sm">Username</p>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:border-PrimaryGold bg-transparent text-white"
                />
            </div>

            <div>
                <p className="text-dullwhite text-sm">Password</p>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:border-PrimaryGold bg-transparent text-white"
                />
            </div>
{/* 
            { && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-md p-2">
                    <p className="text-red-500 text-sm">{}</p>
                </div>
            )} */}

            <button
                type="submit"
                className={`bg-PrimaryGold cursor-pointer text-black font-semibold py-2 rounded-md hover:bg-hovergold transition-all flex justify-center items-center ${isLoading ? 'opacity-70' : ''}`}
            >
                {isLoading ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                    </>
                ) : (
                    'Login'
                )}
            </button>
        </form>

        <p
            onClick={GoToforgotpassword}
            className="text-right text-sm text-PrimaryGold mt-2 cursor-pointer hover:underline"
        >
            Forgot Password?
        </p>
    </div>
</div>
  )
}
