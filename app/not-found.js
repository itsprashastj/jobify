"use client";

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Slide, Fade } from 'react-awesome-reveal';

export default function NotFound() {
    const currentRoute = usePathname();

    return (
        <div
            className={`flex h-[85vh] flex-col items-center justify-center text-center`}
        >
            <Slide
                triggerOnce={true}
            >
                <h1 className={"mb-4 text-6xl font-extrabold text-zinc-500 md:text-5xl duration-300 hover:scale-150"}>
                    Oh oh!
                </h1>
            </Slide>

            <Fade
                triggerOnce={true}
                delay={750}
            >
                <p className={"mb-4 text-lg font-normal text-foreground/70 md:text-xl duration-&lsqb;10000&rsqb animate-pulse"}>
                    Sorry, the page you are looking for
                    <span className='font-bold'> {currentRoute}</span> does not exist.
                </p>
            </Fade>

            <Link href={"/"}>
                <Button>Go back home</Button>
            </Link>
        </div>
    );
}
