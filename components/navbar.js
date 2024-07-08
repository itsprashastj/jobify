"use client";

import { SignedOut, SignedIn, SignInButton, UserButton } from '@clerk/nextjs';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"


const NavBar = ({ user }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        {
            label: 'Home',
            path: '/',
            show: true
        },
        {
            label: 'Dashboard',
            path: '/portal/dashboard',
            show: user
        },
        {
            label: 'Find Jobs',
            path: '/portal/jobs',
            show: true
        },
        {
            label: 'Join Now',
            path: '/auth/sign-in',
            show: true
        },

    ]
    const { toast } = useToast()

    const userProfile = null;



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

                                {menuItems.map((menuItem, index) =>
                                    menuItem.show ? (
                                        menuItem.label === 'Join Now' ? (
                                            <li key={index}>
                                                <Button variant="outline" className="px-4 py-2 text-black rounded-full w-fit">
                                                    <SignedOut>
                                                        {/* <Link href={menuItem.path}>{menuItem.label}</Link> */}
                                                        <SignInButton mode='modal' />
                                                    </SignedOut>
                                                    <SignedIn>
                                                        <UserButton showName userProfileMode='modal' />
                                                    </SignedIn>
                                                </Button>
                                            </li>
                                        ) : menuItem.label === 'Dashboard' ? (
                                            userProfile ? (
                                                <li key={index}>
                                                    <Link href={menuItem.path} className='text-lg'>
                                                        {menuItem.label}
                                                    </Link>

                                                </li>

                                            ) :
                                                (
                                                    <li key={index}>


                                                        <p className='text-lg cursor-pointer' onClick={() => {
                                                            toast({
                                                                variant: "destructive",
                                                                title: "Uh oh! Something went wrong.",
                                                                description: "There was a problem with your request.",
                                                                action: <ToastAction altText="Try again">Try again</ToastAction>,
                                                            })
                                                        }} >
                                                            {menuItem.label}
                                                        </p>
                                                    </li>
                                                )


                                        ) :
                                            (
                                                <li key={index}>
                                                    <Link href={menuItem.path} className='text-lg'>
                                                        {menuItem.label}
                                                    </Link>
                                                </li>
                                            )
                                    ) : null
                                )}
                            </ul>
                        </nav>
                    </div>
                </header>
            </div >

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


                                {menuItems.map((menuItem, index) =>
                                    menuItem.show ? (
                                        menuItem.label === 'Join Now' ? (
                                            <li key={index}>
                                                <Button variant='outline' className="px-4 py-2  text-black rounded-full w-fit">
                                                    <SignedOut>
                                                        <Link href={menuItem.path} onClick={toggleMenu}>{menuItem.label}</Link>
                                                    </SignedOut>
                                                    <SignedIn>
                                                        <UserButton showName />
                                                    </SignedIn>
                                                </Button>
                                            </li>
                                        ) : (
                                            <li key={index}>
                                                <Link href={menuItem.path} className='text-lg' onClick={toggleMenu}>
                                                    {menuItem.label}
                                                </Link>
                                            </li>
                                        )
                                    ) : null
                                )}

                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </div >
    );
}

export default NavBar;
