"use client";

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function NotFound() {
    const currentRoute = usePathname();

    return (
        <div className='fixed inset-0 items-center justify-center flex flex-col font-bold text-2xl'>
            <p>Could not find requested resource: {currentRoute}</p>
            <img src="https://cdn.dribbble.com/users/2771385/screenshots/16267270/media/4d6fd1687943c6f90e7cb93111050c65.gif" alt="Not Found" className='w-[600px]' />
            <Link href="/" ><Button variant="destructive">Return Home</Button></Link>
        </div>
    );
}
