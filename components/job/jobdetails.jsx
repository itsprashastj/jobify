import { Button } from "@/components/ui/button";
import Apply from "./apply";
import { Badge } from "../ui/badge";

import { IndianRupee } from "lucide-react";

export default function JobDescriptionPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] p-4 md:p-6 lg:p-8 ">
      <section className=" py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground rounded-lg">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Senior Frontend Engineer
                </h1>
                <div className="flex items-center gap-4">
                  <Badge
                    variant="outline"
                    className="rounded-lg bg-primary px-4 py-1 text-sm font-medium text-primary-foreground"
                  >
                    Full-time
                  </Badge>
                  <Badge
                    variant="outline"
                    className="rounded-lg bg-primary px-4 py-1 text-sm font-medium text-primary-foreground"
                  >
                    1 year Contract
                  </Badge>
                </div>
                <div className="text-muted-foreground">
                  <span className="font-medium">Acme Inc.</span> - San
                  Francisco, CA
                </div>
                <div className="flex items-center gap-2 text-xl">
                  <IndianRupee className="h-5 w-5 text-primary-foreground" />
                  <div className="text-primary-foreground">120k - 150k</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                  <div className="text-muted-foreground">Posted 3 days ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" container mx-4 py-12 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8">
              <div>
                <h2 className="text-2xl font-bold">Job Description</h2>
                <p className="mt-4 text-muted-foreground">
                  We are looking for an experienced Frontend Engineer to join
                  our growing team. You will be responsible for building and
                  maintaining our web application, which is built using React,
                  Next.js, and Tailwind CSS.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Responsibilities</h2>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Develop and maintain the frontend of our web application
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Collaborate with the design team to implement pixel-perfect
                    designs
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Write clean, maintainable, and well-documented code
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Participate in code reviews and provide feedback to other
                    team members
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Stay up-to-date with the latest frontend technologies and
                    best practices
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Required Skills</h2>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Proficient in React, Next.js, and Tailwind CSS
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Experience with state management libraries like Redux or
                    MobX
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Familiarity with testing frameworks like Jest and Cypress
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Strong problem-solving and analytical skills
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Excellent communication and collaboration skills
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold">What We Offer</h2>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Competitive salary and equity compensation
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Comprehensive health, dental, and vision benefits
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Generous paid time off and holidays
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Professional development opportunities and mentorship
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Flexible work arrangements and remote-friendly culture
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-background p-6 rounded-lg">
              <h2 className="text-2xl font-bold">About Acme Inc.</h2>
              <p className="mt-2 text-muted-foreground">
                Acme Inc. is a leading technology company that specializes in
                building innovative web applications. We are committed to
                creating a diverse and inclusive work environment where everyone
                can thrive.
              </p>
            </div>
            <div className="hidden md:block">
              <Apply />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function DollarSignIcon(props) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}
