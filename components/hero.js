


import React from 'react';
import Image from "next/legacy/image";
import hero from '../public/hero.png';

const HeroSection = () => {
    return (

        <div>

            {/* Mobile View */}

            <div className=" flex flex-col items-center justify-between w-full h-full bg-transparent lg:hidden">
                <div className="flex-1 flex justify-end mb-5">
                    <div className='grayscale'>
                        <Image src={hero} alt="Hero" layout='intrinsic' width={600} height={500} />

                    </div>
                </div>

                <div className="flex-1 text-center pl-8  mb-5">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text inline-block">Find Job that suits you!</h1>
                    <p className="mt-4 text-2xl text-purple-800">
                        Welcome to your professional community.
                        <span className='block'>Find the right job for Shahs.</span>
                    </p>
                    <button className="px-8 py-4 mt-8 text-xl text-white bg-black font-semibold rounded-full">
                        Get Started For Free
                    </button>
                </div>


            </div>


            {/* Xl View */}

            <div className=' items-center w-full bg-transparent hidden lg:flex justify-center'>

                <div className="flex-1 text-center pl-8 ">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text inline-block">Find Job that suits you!</h1>
                    <p className="mt-4 text-2xl text-purple-800">
                        Welcome to your professional community.
                        <span className='block'>Find the right job for Pras.</span>
                    </p>
                    <button className="px-8 py-4 mt-8 text-xl text-white bg-black font-semibold rounded-full">
                        Get Started For Free
                    </button>
                </div>

                <div className="flex-1 flex justify-end">
                    <div className='grayscale'>
                        <Image src={hero} alt="Hero" layout='intrinsic' width={600} height={500} />

                    </div>
                </div>
            </div >
        </div>
    );
}

export default HeroSection;
