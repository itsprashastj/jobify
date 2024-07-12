"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    jobType: [],
    duration: [],
    company: [],
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Acme Inc.",
      salary: "₹100,000",
      type: "Full-time",
      duration: "3 months",
      description:
        "We are looking for an experienced software engineer to join our team and help build our next-generation platform.",
      applications: 25,
      slug: "jobs/Software-Engineer-Acme-Inc",
    },
    {
      id: 2,
      title: "Marketing Coordinator",
      company: "Globex Corporation",
      salary: "₹60,000",
      type: "Part-time",
      duration: "6 months",
      description:
        "Seeking a talented marketing coordinator to help plan and execute our upcoming marketing campaigns.",
      applications: 12,
      slug: "jobs/Marketing-Coordinator-Globex-Corporation",
    },
    {
      id: 3,
      title: "Graphic Designer",
      company: "Stark Industries",
      salary: "₹80,000",
      type: "Contract",
      duration: "1 year",
      description:
        "We need a skilled graphic designer to create visually stunning designs for our brand and marketing materials.",
      applications: 8,
      slug: "jobs/Graphic-Designer-Stark-Industries",
    },
    {
      id: 4,
      title: "Data Analyst",
      company: "Wayne Enterprises",
      salary: "₹90,000",
      type: "Full-time",
      duration: "2 years",
      description:
        "Join our data analytics team and help us uncover valuable insights from our growing data sets.",
      applications: 18,
      slug: "jobs/Data-Analyst-Wayne-Enterprises",
    },
    {
      id: 5,
      title: "Web Developer",
      company: "Stark Industries",
      salary: "₹70,000",
      type: "Part-time",
      duration: "6 months",
      description:
        "We are looking for a talented web developer to help us build and maintain our company website.",
      applications: 9,
      slug: "jobs/Web-Developer-Stark-Industries",
    },
    {
      id: 6,
      title: "Project Manager",
      company: "Globex Corporation",
      salary: "₹100,000",
      type: "Contract",
      duration: "1 year",
      description:
        "Seeking an experienced project manager to lead the delivery of our upcoming software projects.",
      applications: 14,
      slug: "jobs/Project-Manager-Globex-Corporation",
    },
  ];
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const { jobType, duration, company } = filters;
      const jobTitleMatch = job.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const companyMatch = job.company
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const salaryMatch =
        parseFloat(job.salary.replace(/[₹,$]/g, "")) >= parseFloat(searchTerm);
      const jobTypeMatch = jobType.length === 0 || jobType.includes(job.type);
      const durationMatch =
        duration.length === 0 || duration.includes(job.duration);
      const companyFilterMatch =
        company.length === 0 || company.includes(job.company);
      return (
        (jobTitleMatch || companyMatch || salaryMatch) &&
        jobTypeMatch &&
        durationMatch &&
        companyFilterMatch
      );
    });
  }, [searchTerm, filters]);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: prevFilters[type].includes(value)
        ? prevFilters[type].filter((item) => item !== value)
        : [...prevFilters[type], value],
    }));
  };
  const handleFilterToggle = () => {
    setIsFilterOpen((prevState) => !prevState);
  };
  return (
    <div className="flex flex-col md:flex-row">
      <div
        className={`bg-muted p-4 md:w-64 md:border-r transition-all duration-300 ${
          isFilterOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 md:max-h-full md:opacity-100"
        }`}
      >
        <div className="flex items-center justify-between mb-4 md:hidden">
          <h2 className="text-lg font-semibold">Filters</h2>
          <Button variant="ghost" size="icon" onClick={handleFilterToggle}>
            <FilterXIcon className="h-5 w-5" />
          </Button>
        </div>
        <div
          className={`space-y-4 ${isFilterOpen ? "block" : "hidden md:block"}`}
        >
          <div>
            <h3 className="text-sm font-semibold mb-2">Job Type</h3>
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Checkbox
                  checked={filters.jobType.includes("Full-time")}
                  onCheckedChange={() =>
                    handleFilterChange("jobType", "Full-time")
                  }
                />
                Full-time
              </Label>
              <Label className="flex items-center gap-2">
                <Checkbox
                  checked={filters.jobType.includes("Part-time")}
                  onCheckedChange={() =>
                    handleFilterChange("jobType", "Part-time")
                  }
                />
                Part-time
              </Label>
              <Label className="flex items-center gap-2">
                <Checkbox
                  checked={filters.jobType.includes("Contract")}
                  onCheckedChange={() =>
                    handleFilterChange("jobType", "Contract")
                  }
                />
                Contract
              </Label>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Duration</h3>
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Checkbox
                  checked={filters.duration.includes("3 months")}
                  onCheckedChange={() =>
                    handleFilterChange("duration", "3 months")
                  }
                />
                3 months
              </Label>
              <Label className="flex items-center gap-2">
                <Checkbox
                  checked={filters.duration.includes("6 months")}
                  onCheckedChange={() =>
                    handleFilterChange("duration", "6 months")
                  }
                />
                6 months
              </Label>
              <Label className="flex items-center gap-2">
                <Checkbox
                  checked={filters.duration.includes("1 year")}
                  onCheckedChange={() =>
                    handleFilterChange("duration", "1 year")
                  }
                />
                1 year
              </Label>
              <Label className="flex items-center gap-2">
                <Checkbox
                  checked={filters.duration.includes("2 years")}
                  onCheckedChange={() =>
                    handleFilterChange("duration", "2 years")
                  }
                />
                2 years
              </Label>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Company</h3>
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Checkbox
                  checked={filters.company.includes("Acme Inc.")}
                  onCheckedChange={() =>
                    handleFilterChange("company", "Acme Inc.")
                  }
                />
                Acme Inc.
              </Label>
              <Label className="flex items-center gap-2">
                <Checkbox
                  checked={filters.company.includes("Globex Corporation")}
                  onCheckedChange={() =>
                    handleFilterChange("company", "Globex Corporation")
                  }
                />
                Globex Corporation
              </Label>
              <Label className="flex items-center gap-2">
                <Checkbox
                  checked={filters.company.includes("Stark Industries")}
                  onCheckedChange={() =>
                    handleFilterChange("company", "Stark Industries")
                  }
                />
                Stark Industries
              </Label>
              <Label className="flex items-center gap-2">
                <Checkbox
                  checked={filters.company.includes("Wayne Enterprises")}
                  onCheckedChange={() =>
                    handleFilterChange("company", "Wayne Enterprises")
                  }
                />
                Wayne Enterprises
              </Label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 p-4">
        <div className="mb-4 flex items-center gap-4">
          <Input
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={handleFilterToggle}
            className="md:hidden"
          >
            <FilterXIcon className="h-5 w-5" />
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredJobs.map((job) => (
            <Card key={job.id}>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <div className="flex items-center justify-between">
                  <div className="text-muted-foreground">{job.company}</div>
                </div>
                <div className="font-bold">{job.salary}</div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="bg-muted px-2 py-1 rounded-md text-xs font-medium">
                    {job.type}
                  </div>
                  <div className="bg-muted px-2 py-1 rounded-md text-xs font-medium">
                    {job.duration}
                  </div>
                </div>
                <p className="mt-2 text-muted-foreground">{job.description}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <Link href={job.slug} target="_blank">
                  <Button variant="outline">View Details</Button>
                </Link>
                <Badge variant="muted" className="ml-2">
                  {job.applications}+ Already Applied
                </Badge>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function FilterIcon(props) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function FilterXIcon(props) {
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
      <path d="M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055" />
      <path d="m22 3-5 5" />
      <path d="m17 3 5 5" />
    </svg>
  );
}
