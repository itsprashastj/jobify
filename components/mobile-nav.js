"use client";


import { SignedOut, SignedIn, SignInButton, UserButton } from '@clerk/nextjs';
import React, { useState } from 'react';
import { Home, Bookmark, Briefcase, User } from 'lucide-react';

const NavBar = () => {
    const [activeTab, setActiveTab] = useState('home');

    const navItems = [
        { id: 'home', icon: Home, label: 'Home' },
        { id: 'featured', icon: Bookmark, label: 'Featured' },
        { id: 'opportunities', icon: Briefcase, label: 'Jobs' },
        { id: 'profile', icon: User, label: 'Profile' },
    ];

    return (
        <div>
            {/* For large Devices */}
            <div className="hidden md:block">
                <header className="w-full top-0 left-0 z-50 py-4 px-6">
                    <div className="flex items-center justify-center mx-auto max-w-7xl">
                        <nav className="border-2 border-zinc-500 rounded-full shadow-md">
                            <ul className="flex items-center px-6 py-3 space-x-6">
                                <div className="text-2xl font-bold text-zinc-800">jobi&nbsp;
                                    <span className='text-2xl bg-black px-1 rounded-full text-white'>fy</span>
                                </div>
                                <li><a href="#" className="text-zinc-900">Home</a></li>
                                <li><a href="#" className="text-zinc-900">Featured</a></li>
                                <li><a href="#" className="text-zinc-900">Opportunities</a></li>
                                <li>
                                    <button className="px-4 py-2 text-white bg-black rounded-full">
                                        <SignedOut>
                                            <SignInButton />
                                        </SignedOut>
                                        <SignedIn>
                                            <UserButton />
                                        </SignedIn>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>

            {/* for Mobile devices */}
            <div className="md:hidden">
                {/* Content area */}

                <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
                    <div className="flex items-center justify-between px-4 py-3">
                        <div className="text-2xl font-bold items-center justify-center flex text-zinc-800">
                            jobi<span className='bg-black px-1 rounded-full text-white'>fy</span>
                        </div>

                    </div>
                </header>

                <div className="pb-16">
                    {/* Your page content goes here */}
                </div>

                {/* Bottom Navigation */}
                <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
                    <ul className="flex justify-around items-center h-16">
                        {navItems.map((item) => (
                            <li key={item.id} className="flex-1">
                                <button
                                    onClick={() => setActiveTab(item.id)}
                                    className={`w-full h-full flex flex-col items-center justify-center space-y-1
                                                ${activeTab === item.id ? 'text-blue-500' : 'text-gray-500'}`}
                                >
                                    <item.icon size={24} />
                                    {activeTab === item.id && (
                                        <span className="text-xs">{item.label}</span>
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;