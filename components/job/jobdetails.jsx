import { Button } from "@/components/ui/button";
import Apply from "./apply";
import { Badge } from "../ui/badge";
import { IndianRupee, Calendar, Check } from "lucide-react";

import jobData from "./jobdata.json";

export default function JobDescriptionPage() {
  const {
    title,
    contractType,
    duration,
    company,
    location,
    salary,
    postedDate,
    description,
    responsibilities,
    requiredSkills,
    benefits,
    aboutCompany,
  } = jobData;

  return (
    <div className="flex flex-col min-h-[100dvh] p-4 md:p-6 lg:p-8">
      <section className="py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground rounded-lg">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {title}
                </h1>
                <div className="flex items-center gap-4">
                  <Badge
                    variant="outline"
                    className="rounded-lg bg-primary px-4 py-1 text-sm font-medium text-primary-foreground"
                  >
                    {contractType}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="rounded-lg bg-primary px-4 py-1 text-sm font-medium text-primary-foreground"
                  >
                    {duration}
                  </Badge>
                </div>
                <div className="text-muted-foreground">
                  <span className="font-medium">{company}</span> - {location}
                </div>
                <div className="flex items-center gap-2 text-xl">
                  <IndianRupee className="h-5 w-5 text-primary-foreground" />
                  <div className="text-primary-foreground">{salary}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div className="text-muted-foreground">{postedDate}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-4 py-12 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8">
              <div>
                <h2 className="text-2xl font-bold">Job Description</h2>
                <p className="mt-4 text-muted-foreground">{description}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Responsibilities</h2>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {responsibilities.map((resp, index) => (
                    <li key={index}>
                      <Check className="mr-2 inline-block h-4 w-4 text-primary" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Required Skills</h2>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {requiredSkills.map((skill, index) => (
                    <li key={index}>
                      <Check className="mr-2 inline-block h-4 w-4 text-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold">What We Offer</h2>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {benefits.map((benefit, index) => (
                    <li key={index}>
                      <Check className="mr-2 inline-block h-4 w-4 text-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-background p-6 rounded-lg">
              <h2 className="text-2xl font-bold">About {company}</h2>
              <p className="mt-2 text-muted-foreground">{aboutCompany}</p>
            </div>
            <Apply />
          </div>
        </div>
      </section>
    </div>
  );
}
