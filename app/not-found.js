"use client";

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function NotFound() {
    const currentRoute = usePathname();

    return (
        <div
            className={`flex h-[85vh] flex-col items-center justify-center text-center`}
        >
            <h1 className={"mb-4 text-4xl font-extrabold text-zinc-500 md:text-5xl"}>
                Uh oh!
            </h1>
            <p className={"mb-4 text-lg font-light text-foreground/70 md:text-xl"}>
                Sorry, the page you are looking for {currentRoute} does not exist.
            </p>
            <Link href={"/"}>
                <Button>Go back home</Button>
            </Link>
        </div>
    );
}
