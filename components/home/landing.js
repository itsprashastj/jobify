
import Link from "next/link"
import hero from '@/public/hero.png'
import Image from 'next/image'
import { Badge } from "../ui/badge"
import FooterComp from "../footer"

export default function Landing() {
    return (
        <div className="flex flex-col min-h-[100dvh]">

            <main className="flex-1 ">
                <section className="w-full py-12 md:py-24 lg:py-16 ">
                    <Image src={hero} alt="Hero" className="-z-10 grayscale blur-sm opacity-90" fill />
                    <div className="container flex text-center justify-center px-4 md:px-6 ">
                        <div className="space-y-4 ">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                Find Your Dream Job with Jobify
                            </h1>
                            <p className="max-w-[800px] text-primary md:text-xl lg:text-base xl:text-xl">
                                Jobify is the leading job portal that connects top talent with the best companies. Search, apply, and get
                                hired with ease.
                            </p>
                            <div className="flex flex-col gap-2 justify-center min-[400px]:flex-row">
                                <Link
                                    href="/portal/jobs"
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    prefetch={false}
                                >
                                    Find Jobs
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    prefetch={false}
                                >
                                    Post a Job
                                </Link>
                            </div>
                        </div>

                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container space-y-12 px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <Badge variant="muted" className="inline-block rounded-lg px-3 py-1 text-lg">Key Features

                                </Badge>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover the Power of Jobify</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Jobify offers a comprehensive suite of features to help you find the perfect job or hire the best
                                    talent.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
                            <div className="grid gap-1">
                                <div className="flex items-center gap-2">
                                    <SearchIcon className="h-6 w-6 text-primary" />
                                    <h3 className="text-lg font-bold">Advanced Search</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Easily search and filter through thousands of job listings to find the perfect fit.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <div className="flex items-center gap-2">
                                    <BriefcaseIcon className="h-6 w-6 text-primary" />
                                    <h3 className="text-lg font-bold">Job Alerts</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Get notified of new job postings that match your criteria and apply with ease.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <div className="flex items-center gap-2">
                                    <UsersIcon className="h-6 w-6 text-primary" />
                                    <h3 className="text-lg font-bold">Employer Profiles</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Explore detailed company profiles and reviews to find the right employer for you.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <div className="flex items-center gap-2">
                                    <BriefcaseIcon className="h-6 w-6 text-primary" />
                                    <h3 className="text-lg font-bold">Resume Builder</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Create a professional-looking resume with our easy-to-use resume builder tool.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <div className="flex items-center gap-2">
                                    <ClipboardIcon className="h-6 w-6 text-primary" />
                                    <h3 className="text-lg font-bold">Application Tracking</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Stay on top of your job applications and track your progress with our application tracking system.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <div className="flex items-center gap-2">
                                    <BriefcaseIcon className="h-6 w-6 text-primary" />
                                    <h3 className="text-lg font-bold">Employer Branding</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Showcase your company's culture and job opportunities to attract top talent.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <FooterComp />

        </div >
    )
}



function BriefcaseIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
    )
}


function ClipboardIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        </svg>
    )
}


function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}


function UsersIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}