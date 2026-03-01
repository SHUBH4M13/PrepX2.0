import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router';
import { useState } from 'react';
import axios from 'axios';

export default function Signup() {
    const SIGNUP_URL =  "http://localhost:8080" + "/signup";
    const Navigate = useNavigate();

    const GoToLogin = () => {
        Navigate("/login")
    }

    return (
        <div className="bg-darkbg min-h-screen flex justify-center items-center p-4">
            <div className="bg-Secondarybg rounded-xl w-full max-w-[450px] sm:w-[450px] p-6 shadow-lg">
                <div className="text-center">
                    <p className="font-bold text-white text-2xl">Welcome to PrepX</p>
                    <p className="py-2 text-dullwhite">Create an Account to continue</p>
                </div>

                <div className="flex justify-evenly mt-4">
                    <div onClick={GoToLogin} className="w-1/2 text-center border-b-2 pb-2 cursor-pointer border-dullwhite text-dullwhite  hover:border-white hover:text-white ">
                        Login
                    </div>
                    <div className="w-1/2 text-center border-b-2 pb-2 cursor-pointer border-PrimaryGold text-PrimaryGold">
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
                        <p className="text-dullwhite text-sm">Email</p>
                        <input
                            type="email"
                            name="email"
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

                    <div>
                        <p className="text-dullwhite text-sm">Confirm Password</p>
                        <input
                            type="password"
                            name="confirmpass"
                            placeholder="Confirm password"
                            className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:border-PrimaryGold bg-transparent text-white"
                        />
                    </div>

                    {/* {SignUpError && <p className="text-red-500 text-sm">{SignUpError}</p>} */}

                    <button
                        type="button"
                        className="bg-PrimaryGold cursor-pointer text-black font-semibold py-2 rounded-md hover:bg-yellow-500 transition-all"
                    >
                        Create Account
                    </button>
                </form>
                
            </div>
        </div>
    );
}
