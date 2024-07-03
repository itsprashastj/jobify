import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";

export default function Portal() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="bg-muted py-12 px-6 sm:px-8 md:px-10">
          <div className="container mx-auto grid gap-8">
            <div>
              <h1 className="text-3xl font-bold">Welcome to Job Portal</h1>
              <p className="text-muted-foreground">
                Find your dream job and connect with top recruiting companies.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Featured Jobs</CardTitle>
                  <CardDescription>
                    Explore the latest job openings.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <Link
                      href="#"
                      className="group flex items-center justify-between gap-4 rounded-md bg-background p-4 hover:bg-accent hover:text-accent-foreground"
                      prefetch={false}
                    >
                      <div className="flex-1 overflow-hidden">
                        <div className="font-medium group-hover:underline">
                          Software Engineer
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Acme Inc.
                        </div>
                      </div>
                      <Badge variant="secondary">Full-time</Badge>
                    </Link>
                    <Link
                      href="#"
                      className="group flex items-center justify-between gap-4 rounded-md bg-background p-4 hover:bg-accent hover:text-accent-foreground"
                      prefetch={false}
                    >
                      <div className="flex-1 overflow-hidden">
                        <div className="font-medium group-hover:underline">
                          Marketing Manager
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Globex Corporation
                        </div>
                      </div>
                      <Badge variant="secondary">Part-time</Badge>
                    </Link>
                    <Link
                      href="#"
                      className="group flex items-center justify-between gap-4 rounded-md bg-background p-4 hover:bg-accent hover:text-accent-foreground"
                      prefetch={false}
                    >
                      <div className="flex-1 overflow-hidden">
                        <div className="font-medium group-hover:underline">
                          UI/UX Designer
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Stark Industries
                        </div>
                      </div>
                      <Badge variant="secondary">Contract</Badge>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Top Recruiting Companies</CardTitle>
                  <CardDescription>
                    Discover the leading companies hiring now.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <Link
                      href="#"
                      className="group flex items-center justify-between gap-4 rounded-md bg-background p-4 hover:bg-accent hover:text-accent-foreground"
                      prefetch={false}
                    >
                      <div className="flex-1 overflow-hidden">
                        <div className="font-medium group-hover:underline">
                          Acme Inc.
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Software, IT
                        </div>
                      </div>
                      <Badge variant="secondary">
                        <BriefcaseIcon className="h-4 w-4" />
                        20+ openings
                      </Badge>
                    </Link>
                    <Link
                      href="#"
                      className="group flex items-center justify-between gap-4 rounded-md bg-background p-4 hover:bg-accent hover:text-accent-foreground"
                      prefetch={false}
                    >
                      <div className="flex-1 overflow-hidden">
                        <div className="font-medium group-hover:underline">
                          Globex Corporation
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Marketing, Sales
                        </div>
                      </div>
                      <Badge variant="secondary">
                        <BriefcaseIcon className="h-4 w-4" />
                        15+ openings
                      </Badge>
                    </Link>
                    <Link
                      href="#"
                      className="group flex items-center justify-between gap-4 rounded-md bg-background p-4 hover:bg-accent hover:text-accent-foreground"
                      prefetch={false}
                    >
                      <div className="flex-1 overflow-hidden">
                        <div className="font-medium group-hover:underline">
                          Stark Industries
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Design, Engineering
                        </div>
                      </div>
                      <Badge variant="secondary">
                        <BriefcaseIcon className="h-4 w-4" />
                        10+ openings
                      </Badge>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12 px-6 sm:px-8 md:px-10">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Find Your Dream Job</h2>
              <div className="relative flex-1 max-w-md">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search jobs, companies, and more..."
                  className="pl-10 pr-4 h-10 rounded-md w-full"
                />
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-background shadow-sm">
                <CardHeader>
                  <CardTitle>Job Filters</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 p-6">
                  <div>
                    <Label htmlFor="job-category">Job Category</Label>
                    <Select id="job-category" className="mt-1 w-full">
                      <option value="">Select a category</option>
                      <option value="software">Software</option>
                      <option value="marketing">Marketing</option>
                      <option value="design">Design</option>
                      <option value="finance">Finance</option>
                      <option value="healthcare">Healthcare</option>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      type="text"
                      placeholder="Enter a location"
                      className="mt-1 w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="job-type">Job Type</Label>
                    <Select id="job-type" className="mt-1 w-full">
                      <option value="">Select a job type</option>
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="contract">Contract</option>
                      <option value="internship">Internship</option>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="salary-range">Salary Range</Label>
                    <div className="mt-1 flex items-center gap-2">
                      <Input
                        id="salary-range"
                        type="number"
                        placeholder="Min"
                        className="w-full"
                      />
                      <span>-</span>
                      <Input
                        type="number"
                        placeholder="Max"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <Button className="w-full">Search Jobs</Button>
                </CardContent>
              </Card>
              <div className="col-span-2 lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Latest Job Openings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <Link
                        href="#"
                        className="group flex items-center justify-between gap-4 rounded-md bg-background p-4 hover:bg-accent hover:text-accent-foreground"
                        prefetch={false}
                      >
                        <div className="flex-1 overflow-hidden">
                          <div className="font-medium group-hover:underline">
                            Senior Software Engineer
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Acme Inc.
                          </div>
                          <div className="text-sm text-muted-foreground">
                            <MapPinIcon className="h-4 w-4 inline-block mr-1" />
                            San Francisco, CA
                          </div>
                        </div>
                        <Badge variant="secondary">Full-time</Badge>
                      </Link>
                      <Link
                        href="#"
                        className="group flex items-center justify-between gap-4 rounded-md bg-background p-4 hover:bg-accent hover:text-accent-foreground"
                        prefetch={false}
                      >
                        <div className="flex-1 overflow-hidden">
                          <div className="font-medium group-hover:underline">
                            Digital Marketing Specialist
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Globex Corporation
                          </div>
                          <div className="text-sm text-muted-foreground">
                            <MapPinIcon className="h-4 w-4 inline-block mr-1" />
                            New York, NY
                          </div>
                        </div>
                        <Badge variant="secondary">Part-time</Badge>
                      </Link>
                      <Link
                        href="#"
                        className="group flex items-center justify-between gap-4 rounded-md bg-background p-4 hover:bg-accent hover:text-accent-foreground"
                        prefetch={false}
                      >
                        <div className="flex-1 overflow-hidden">
                          <div className="font-medium group-hover:underline">
                            UI/UX Designer
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Stark Industries
                          </div>
                          <div className="text-sm text-muted-foreground">
                            <MapPinIcon className="h-4 w-4 inline-block mr-1" />
                            Chicago, IL
                          </div>
                        </div>
                        <Badge variant="secondary">Contract</Badge>
                      </Link>
                      <Link
                        href="#"
                        className="group flex items-center justify-between gap-4 rounded-md bg-background p-4 hover:bg-accent hover:text-accent-foreground"
                        prefetch={false}
                      >
                        <div className="flex-1 overflow-hidden">
                          <div className="font-medium group-hover:underline">
                            Data Analyst
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Stark Industries
                          </div>
                          <div className="text-sm text-muted-foreground">
                            <MapPinIcon className="h-4 w-4 inline-block mr-1" />
                            Seattle, WA
                          </div>
                        </div>
                        <Badge variant="secondary">Full-time</Badge>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted text-muted-foreground py-6 px-6 sm:px-8 md:px-10">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm">&copy; 2024 Job Portal</p>
          <nav className="flex items-center gap-4">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Privacy
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Terms
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
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
  );
}

function MapPinIcon(props) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
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

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
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
  );
}
