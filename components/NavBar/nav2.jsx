import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";

import { NavLinksCandidate, NavLinksRecruiter } from "./navlinks";

export default function Nav2({ user }) {
  const userID = user?.id;

  return (
    <div>
      <header className="bg-white text-black shadow-sm py-4 px-6 sm:px-8 md:px-10 flex items-center justify-between">
        <Link href="/">
          <div className="text-2xl font-bold text-zinc-800">
            jobi&nbsp;
            <span className="text-2xl bg-black px-1 rounded-full text-white">
              fy
            </span>
          </div>
        </Link>
        {/* <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/portal/dashboard"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Dashboard
          </Link>
          <Link
            href="/portal/jobs"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Jobs
          </Link>
          <Link
            href="/portal/company"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Recuiters
          </Link>
          <Link
            href="/portal/profile"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Profile
          </Link>
        </nav> */}

        <nav className="hidden md:flex items-center gap-6">
          {NavLinksCandidate.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-end gap-4">
          <Button variant="outline" className="hidden md:block" size="sm">
            Post a Job
          </Button>

          <div className=" justify-end items-end rounded-xl text-black hidden md:block">
            <SignedOut>
              <Link href={"/auth/sign-in"}>
                <Button size="sm">Login</Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton showName className="hidden lg:block" />
            </SignedIn>
          </div>

          <div className=" justify-end items-end rounded-xl text-black block md:hidden">
            <SignedOut>
              <Link href={"/auth/sign-in"}>
                <Button size="sm">Login</Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="md:hidden">
            <div className="grid gap-4 p-4">
              {NavLinksCandidate.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-lg font-medium hover:underline"
                  prefetch={false}
                >
                  {link.title}
                </Link>
              ))}
              <Button size="sm">Post a Job</Button>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
