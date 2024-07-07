import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";

export default function Poprtal2() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 space-y-8">
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Find Your Dream Job
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Discover the best job opportunities from top companies and
                  connect with the best recruiters.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Input
                  type="text"
                  placeholder="Search for jobs..."
                  className="max-w-lg flex-1"
                />
                <Button type="submit">Search</Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="flex items-center mt-3 gap-4">
                  <BriefcaseIcon className="w-8 h-8" />
                  <div>
                    <h3 className="text-lg font-semibold">Featured Jobs</h3>
                    <p className="text-muted-foreground">
                      Explore the best job opportunities.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4">
                  <UsersIcon className="w-8 h-8" />
                  <div>
                    <h3 className="text-lg font-semibold">Top Recruiters</h3>
                    <p className="text-muted-foreground">
                      Connect with the best recruiting companies.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4">
                  <ClockIcon className="w-8 h-8" />
                  <div>
                    <h3 className="text-lg font-semibold">Recent Jobs</h3>
                    <p className="text-muted-foreground">
                      Discover the latest job postings.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4">
                  <StarIcon className="w-8 h-8" />
                  <div>
                    <h3 className="text-lg font-semibold">Top Companies</h3>
                    <p className="text-muted-foreground">
                      Explore job opportunities at leading companies.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Featured Jobs
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Discover Your Next Opportunity
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse through the latest job postings from top companies and
                  apply today.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              <Card>
                <CardHeader className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    width="40"
                    height="40"
                    alt="Company Logo"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Software Engineer</h3>
                    <p className="text-muted-foreground text-sm">
                      Acme Inc - San Francisco, CA
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Seeking a talented software engineer to join our growing
                    team. Experience with React and Node.js required.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Apply Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    width="40"
                    height="40"
                    alt="Company Logo"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Product Manager</h3>
                    <p className="text-muted-foreground text-sm">
                      Globex Inc - New York, NY
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Experienced product manager needed to lead the development
                    of our new SaaS platform. Strong analytical and
                    communication skills required.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Apply Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    width="40"
                    height="40"
                    alt="Company Logo"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      Marketing Specialist
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Stark Industries - Los Angeles, CA
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Seeking a creative and data-driven marketing specialist to
                    join our growing team. Experience with digital marketing and
                    social media required.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Apply Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    width="40"
                    height="40"
                    alt="Company Logo"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Data Analyst</h3>
                    <p className="text-muted-foreground text-sm">
                      Stark Industries - Chicago, IL
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Experienced data analyst needed to join our growing
                    analytics team. Strong SQL and data visualization skills
                    required.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Apply Now</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Top Recruiters
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Connect with the Best
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the top recruiting companies and connect with them to
                  find your dream job.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              <Card>
                <CardHeader className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    width="40"
                    height="40"
                    alt="Company Logo"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Acme Recruiting</h3>
                    <p className="text-muted-foreground text-sm">
                      Top recruiting firm in the Bay Area.
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Acme Recruiting has been helping top companies find the best
                    talent for over 20 years. They specialize in technology,
                    finance, and healthcare.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Connect</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    width="40"
                    height="40"
                    alt="Company Logo"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Globex Talent</h3>
                    <p className="text-muted-foreground text-sm">
                      Leading recruiting agency in New York.
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Globex Talent has been connecting top companies with
                    talented professionals for over a decade. They specialize in
                    finance, consulting, and marketing roles.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Connect</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    width="40"
                    height="40"
                    alt="Company Logo"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Stark Talent</h3>
                    <p className="text-muted-foreground text-sm">
                      Premier recruiting firm in Los Angeles.
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Stark Talent has been helping top companies in the
                    entertainment and technology industries find the best talent
                    for over 15 years.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Connect</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    width="40"
                    height="40"
                    alt="Company Logo"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Stark Talent</h3>
                    <p className="text-muted-foreground text-sm">
                      Premier recruiting firm in Los Angeles.
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Stark Talent has been helping top companies in the
                    entertainment and technology industries find the best talent
                    for over 15 years.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Connect</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Recent Jobs
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Discover the Latest Opportunities
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out the latest job postings from the top companies with
                  the most followers.
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-8">
              <Card>
                <CardHeader className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    width="40"
                    height="40"
                    alt="Company Logo"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      Senior Software Engineer
                    </h3>
                    <p className="text-muted-foreground text-sm" />
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </main>
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

function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
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
  );
}
