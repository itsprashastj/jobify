import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 grid gap-8 p-4 md:p-6 lg:p-8">
        <section className="bg-primary py-20 px-4 md:px-6 lg:px-8 rounded-lg flex flex-col items-center justify-center text-center text-primary-foreground">
          <h1 className="text-4xl font-bold mb-4">Welcome, John Doe!</h1>
          <p className="text-lg mb-8">
            Discover your dream job and take the next step in your career.
          </p>
          <div className="flex gap-4">
            <Link href="/portal/jobs" target="_blank" prefetch={false}>
              <Button variant="secondary" size="sm">
                Search Jobs
              </Button>
            </Link>

            <Button variant="secondary" size="sm">
              Post a Job
            </Button>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Featured Jobs</h2>
              <Link
                href="#"
                className="text-primary hover:underline"
                prefetch={false}
              >
                View All
              </Link>
            </div>
          </div>
          <Card>
            <CardContent className="grid gap-2">
              <h3 className="text-lg font-semibold">Software Engineer</h3>
              <div className="text-muted-foreground">Acme Inc</div>
              <p className="line-clamp-2">
                We are looking for a talented software engineer to join our
                growing team. You will be responsible for building and
                maintaining our web applications.
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Apply Now
                </Button>
                <div className="text-xs text-muted-foreground">
                  10 applicants
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-2">
              <h3 className="text-lg font-semibold">Product Manager</h3>
              <div className="text-muted-foreground">Globex Corp</div>
              <p className="line-clamp-2">
                We are seeking a experienced product manager to lead the
                development of our new SaaS platform. You will work closely with
                the engineering and design teams.
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Apply Now
                </Button>
                <div className="text-xs text-muted-foreground">
                  25 applicants
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-2">
              <h3 className="text-lg font-semibold">UI/UX Designer</h3>
              <div className="text-muted-foreground">Stark Industries</div>
              <p className="line-clamp-2">
                We are looking for a talented UI/UX designer to join our
                creative team. You will be responsible for designing the user
                interface and experience for our web and mobile apps.
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Apply Now
                </Button>
                <div className="text-xs text-muted-foreground">
                  15 applicants
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Top Recruiters</h2>
              <Link
                href="#"
                className="text-primary hover:underline"
                prefetch={false}
              >
                View All
              </Link>
            </div>
          </div>
          <Card>
            <CardContent className="grid gap-2 items-center">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="text-lg font-semibold">John Doe</div>
              <div className="text-muted-foreground">120 jobs posted</div>
              <Button variant="outline" size="sm">
                View Profile
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-2 items-center">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JA</AvatarFallback>
              </Avatar>
              <div className="text-lg font-semibold">Jane Appleseed</div>
              <div className="text-muted-foreground">95 jobs posted</div>
              <Button variant="outline" size="sm">
                View Profile
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-2 items-center">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div className="text-lg font-semibold">Sarah Musk</div>
              <div className="text-muted-foreground">80 jobs posted</div>
              <Button variant="outline" size="sm">
                View Profile
              </Button>
            </CardContent>
          </Card>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Recent Jobs</h2>
              <Link
                href="#"
                className="text-primary hover:underline"
                prefetch={false}
              >
                View All
              </Link>
            </div>
          </div>
          <Card>
            <CardContent className="grid gap-2">
              <h3 className="text-lg font-semibold">Data Analyst</h3>
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground">Stark Industries</div>
                <div className="text-xs text-muted-foreground">
                  50k+ followers
                </div>
              </div>
              <p className="line-clamp-2">
                We are seeking a data analyst to join our growing analytics
                team. You will be responsible for analyzing data and providing
                insights to help drive business decisions.
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Apply Now
                </Button>
                <div className="text-xs text-muted-foreground">
                  35 applicants
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-2">
              <h3 className="text-lg font-semibold">Marketing Manager</h3>
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground">Globex Corp</div>
                <div className="text-xs text-muted-foreground">
                  40k+ followers
                </div>
              </div>
              <p className="line-clamp-2">
                We are looking for an experienced marketing manager to develop
                and execute our digital marketing strategy. You will work
                closely with the sales and product teams.
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Apply Now
                </Button>
                <div className="text-xs text-muted-foreground">
                  28 applicants
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-2">
              <h3 className="text-lg font-semibold">Frontend Developer</h3>
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground">Acme Inc</div>
                <div className="text-xs text-muted-foreground">
                  60k+ followers
                </div>
              </div>
              <p className="line-clamp-2">
                We are seeking a talented frontend developer to join our
                engineering team. You will be responsible for building
                high-performance, responsive web applications.
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Apply Now
                </Button>
                <div className="text-xs text-muted-foreground">
                  42 applicants
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-2">
              <h3 className="text-lg font-semibold">Sales Representative</h3>
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground">Stark Industries</div>
                <div className="text-xs text-muted-foreground">
                  55k+ followers
                </div>
              </div>
              <p className="line-clamp-2">
                We are looking for a sales representative to join our growing
                sales team. You will be responsible for generating new leads and
                closing deals.
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Apply Now
                </Button>
                <div className="text-xs text-muted-foreground">
                  31 applicants
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-2">
              <h3 className="text-lg font-semibold">Content Writer</h3>
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground">Globex Corp</div>
                <div className="text-xs text-muted-foreground">
                  45k+ followers
                </div>
              </div>
              <p className="line-clamp-2">
                We are seeking a talented content writer to join our marketing
                team. You will be responsible for creating high-quality content
                for our blog and social media channels.
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Apply Now
                </Button>
                <div className="text-xs text-muted-foreground">
                  24 applicants
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Trending Jobs</h2>
              <Link
                href="#"
                className="text-primary hover:underline"
                prefetch={false}
              >
                View All
              </Link>
            </div>
          </div>
          <Card>
            <CardContent className="grid gap-2">
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">Data Scientist</div>
                <div className="text-xs text-muted-foreground">New</div>
              </div>
              <div className="text-muted-foreground">Acme Inc</div>
              <p className="line-clamp-2">
                We are seeking a talented data scientist to join our growing
                analytics team. You will be responsible for developing machine
                learning models and deriving insights from large datasets.
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Apply Now
                </Button>
                <div className="text-xs text-muted-foreground">
                  18 applicants
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-2">
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">Product Designer</div>
                <div className="text-xs text-muted-foreground">Trending</div>
              </div>
              <div className="text-muted-foreground">Globex Corp</div>
              <p className="line-clamp-2">
                We are looking for an experienced product designer to join our
                design team. You will be responsible for designing the user
                experience and interface for our SaaS platform.
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Apply Now
                </Button>
                <div className="text-xs text-muted-foreground">
                  22 applicants
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-2">
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">DevOps Engineer</div>
                <div className="text-xs text-muted-foreground">Trending</div>
              </div>
              <div className="text-muted-foreground">Stark Industries</div>
              <p className="line-clamp-2">
                We are seeking a DevOps engineer to join our infrastructure
                team. You will be responsible for automating and optimizing our
                deployment and monitoring processes.
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Apply Now
                </Button>
                <div className="text-xs text-muted-foreground">
                  27 applicants
                </div>
              </div>
            </CardContent>
          </Card>
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
