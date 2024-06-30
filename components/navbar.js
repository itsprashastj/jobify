// components/HeroSection.js
import React from 'react';

const NavBar = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-transparent">
            <header className="w-full fixed top-0 left-0 z-50 p-6">
                <div className="flex items-center justify-center mx-auto max-w-7xl">
                    <nav className="bg-gradient-to-r from-blue-200 to-green-200 rounded-full shadow-md">
                        <ul className="flex items-center px-6 py-3 space-x-6">
                            <div className="text-2xl font-bold text-purple-900">Jobi&nbsp;
                                <span className='text-2xl bg-blue-500 px-1 rounded-full text-white'>fy</span> </div>

                            <li ><a href="#" className="text-purple-900">Pricing</a></li>
                            <li><a href="#" className="text-purple-900">Inspiration</a></li>
                            <li><a href="#" className="text-purple-900">Tools</a></li>
                            <li>
                                <button className="px-4 py-2 text-white bg-blue-500 rounded-full">
                                    Get Started
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

        </div>
    );
}

export default NavBar;
