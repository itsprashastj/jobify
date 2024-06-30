


import React from 'react';
import Image from 'next/image';
import hero from '../public/hero.png';

const HeroSection = () => {
    return (
        <div className="flex items-center justify-between w-full h-screen bg-transparent">
            <div className="flex-1 text-center pl-8">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text inline-block">Find Job that suits you!</h1>
                <p className="mt-4 text-2xl text-purple-800">
                    Welcome to your professional community.
                    <span className='block'>Find the right job for you.</span>
                </p>
                <button className="px-8 py-4 mt-8 text-xl text-white bg-blue-500 rounded-full">
                    Get Started For Free
                </button>
            </div>

            <div className="flex-1 mt-16">
                <Image src={hero} alt="Hero" layout="responsive" width={500} height={500} objectFit="contain" />
            </div>
        </div>
    );
}

export default HeroSection;