// // components/HeroSection.js
// import { SignedOut, SignedIn, SignInButton, UserButton } from '@clerk/nextjs';
// import React from 'react';

// const NavBar = () => {
//     return (
//         <div>

//             {/* For large Devices */}
//             <div className="flex flex-col items-center justify-center bg-transparent">
//                 <header className="w-full top-0 left-0 z-50 py-4 px-6">
//                     <div className="flex items-center justify-center mx-auto max-w-7xl">
//                         <nav className="border-2 border-zinc-500 rounded-full shadow-md">
//                             <ul className="flex items-center px-6 py-3 space-x-6">
//                                 <div className="text-2xl font-bold text-zinc-800">jobi&nbsp;
//                                     <span className='text-2xl bg-black px-1 rounded-full text-white'>fy</span> </div>

//                                 <li ><a href="#" className="text-zinc-900">Home</a></li>
//                                 <li><a href="#" className="text-zinc-900">Featured</a></li>
//                                 <li><a href="#" className="text-zinc-900">Opportunities</a></li>
//                                 <li>
//                                     <button className="px-4 py-2 text-white bg-black rounded-full">
//                                         <SignedOut>
//                                             <SignInButton />
//                                         </SignedOut>
//                                         <SignedIn>
//                                             <UserButton />
//                                         </SignedIn>
//                                     </button>
//                                 </li>
//                             </ul>
//                         </nav>
//                     </div>
//                 </header>

//             </div>


//             {/* for Mobile devices */}


//         </div>

//     );
// }

// export default NavBar;

"use client";

import { SignedOut, SignedIn, SignInButton, UserButton } from '@clerk/nextjs';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            {/* For large Devices */}
            <div className="hidden md:flex flex-col items-center justify-center bg-transparent">
                <header className="w-full top-0 left-0 z-50 py-4 px-6">
                    <div className="flex items-center justify-center mx-auto max-w-7xl">
                        <nav className="border-2 border-zinc-500 rounded-full shadow-md">
                            <ul className="flex items-center px-6 py-3 space-x-6">

                                <Link href="/">

                                    <div className="text-2xl font-bold text-zinc-800">jobi&nbsp;
                                        <span className='text-2xl bg-black px-1 rounded-full text-white'>fy</span>
                                    </div>
                                </Link>
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
            <div className="md:hidden mb-16">
                <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
                    <div className="flex items-center justify-between px-4 py-3">
                        <Link href="/">

                            <div className="text-2xl font-bold text-zinc-800">jobi&nbsp;
                                <span className='text-2xl bg-black px-1 rounded-full text-white'>fy</span>
                            </div>
                        </Link>
                        <button onClick={toggleMenu} className="text-zinc-900">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </header>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="fixed inset-0 z-40 bg-white pt-16">
                        <nav>
                            <ul className="flex flex-col items-center space-y-4 pt-4">
                                <li><a href="#" className="text-zinc-900 text-lg" onClick={toggleMenu}>Home</a></li>
                                <li><a href="#" className="text-zinc-900 text-lg" onClick={toggleMenu}>Featured</a></li>
                                <li><a href="#" className="text-zinc-900 text-lg" onClick={toggleMenu}>Opportunities</a></li>
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
                )}
            </div>
        </div>
    );
}

export default NavBar;
