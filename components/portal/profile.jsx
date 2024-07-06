"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

import tabData from "./data.json";

export default function ViewProfile() {
  const [activeTab, setActiveTab] = useState("profile");
  const [projects, setProjects] = useState([
    {
      name: "Project A",
      description: "Description for Project A",
      url: "https://example.com/project-a",
      image: "/placeholder.svg",
    },
    {
      name: "Project B",
      description: "Description for Project B",
      url: "https://example.com/project-b",
      image: "/placeholder.svg",
    },
  ]);
  const [skills, setSkills] = useState([
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "SQL",
  ]);
  const [education, setEducation] = useState([
    {
      institute: "University of Example",
      degree: "Bachelor of Science",
      startDate: "2016-09-01",
      endDate: "2020-06-01",
      grade: "A",
    },
    {
      institute: "High School of Example",
      degree: "High School Diploma",
      startDate: "2012-09-01",
      endDate: "2016-06-01",
      grade: "A+",
    },
  ]);
  const [socialLinks, setSocialLinks] = useState([
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/johndoe",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/johndoe",
    },
  ]);
  return (
    <div className="flex flex-col w-full justify-center min-h-screen p-4 md:flex-row md:p-10">
      <main className="w-full md:w-3/4">
        {/* <Tabs
          defaultValue={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="border-b">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="jobs">Applied Jobs</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="social">Social Links</TabsTrigger>
            <TabsTrigger value="resume">Resume</TabsTrigger>
          </TabsList> */}

        <Tabs
          defaultValue={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="border-b">
            {tabData.tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsList className="ml-5">
            <TabsTrigger value="certifications">Test</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>
                  View and manage your profile information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid items-center grid-cols-4 gap-4">
                    <div className="flex items-center justify-center">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="col-span-3 text-center">
                      <h2 className="text-xl font-bold">John Doe</h2>
                      <p>john@example.com</p>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="grid items-center grid-cols-4 gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <div className="col-span-3">
                      <p>John Doe</p>
                    </div>
                  </div>
                  <div className="grid items-center grid-cols-4 gap-4">
                    <Label htmlFor="contact" className="text-right">
                      Contact
                    </Label>
                    <div className="col-span-3">
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="grid items-center grid-cols-4 gap-4">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <div className="col-span-3">
                      <p>john@example.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Edit Profile</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when
                        you&apos;re done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="name"
                          value="John Doe"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="contact" className="text-right">
                          Contact
                        </Label>
                        <Input
                          id="contact"
                          value="+1 (555) 123-4567"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="email" className="text-right">
                          Email
                        </Label>
                        <Input
                          id="email"
                          value="john@example.com"
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save Changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="certifications">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
                <CardDescription>
                  View and manage your certifications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-end mb-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Add Certification</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Add Certification</DialogTitle>
                        <DialogDescription>
                          Enter the details of your new certification.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid items-center grid-cols-4 gap-4">
                          <Label
                            htmlFor="certification-name"
                            className="text-right"
                          >
                            Name
                          </Label>
                          <Input
                            id="certification-name"
                            placeholder="Enter certification name"
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid items-center grid-cols-4 gap-4">
                          <Label
                            htmlFor="certification-date"
                            className="text-right"
                          >
                            Date
                          </Label>
                          <Input
                            id="certification-date"
                            type="date"
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid items-center grid-cols-4 gap-4">
                          <Label
                            htmlFor="certification-issuer"
                            className="text-right"
                          >
                            Issuer
                          </Label>
                          <Input
                            id="certification-issuer"
                            placeholder="Enter certification issuer"
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save Certification</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Issuer</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>AWS Certified Developer</TableCell>
                      <TableCell>2022-06-15</TableCell>
                      <TableCell>Amazon Web Services</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">
                                Edit
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <DialogHeader>
                                <DialogTitle>Edit Certification</DialogTitle>
                                <DialogDescription>
                                  Update the details of your certification.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <div className="grid items-center grid-cols-4 gap-4">
                                  <Label
                                    htmlFor="certification-name"
                                    className="text-right"
                                  >
                                    Name
                                  </Label>
                                  <Input
                                    id="certification-name"
                                    defaultValue="AWS Certified Developer"
                                    className="col-span-3"
                                  />
                                </div>
                                <div className="grid items-center grid-cols-4 gap-4">
                                  <Label
                                    htmlFor="certification-date"
                                    className="text-right"
                                  >
                                    Date
                                  </Label>
                                  <Input
                                    id="certification-date"
                                    type="date"
                                    defaultValue="2022-06-15"
                                    className="col-span-3"
                                  />
                                </div>
                                <div className="grid items-center grid-cols-4 gap-4">
                                  <Label
                                    htmlFor="certification-issuer"
                                    className="text-right"
                                  >
                                    Issuer
                                  </Label>
                                  <Input
                                    id="certification-issuer"
                                    defaultValue="Amazon Web Services"
                                    className="col-span-3"
                                  />
                                </div>
                              </div>
                              <DialogFooter>
                                <Button type="submit">Save Changes</Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                          <Button variant="destructive" size="sm">
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>PMP Certification</TableCell>
                      <TableCell>2021-09-01</TableCell>
                      <TableCell>Project Management Institute</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">
                                Edit
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <DialogHeader>
                                <DialogTitle>Edit Certification</DialogTitle>
                                <DialogDescription>
                                  Update the details of your certification.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <div className="grid items-center grid-cols-4 gap-4">
                                  <Label
                                    htmlFor="certification-name"
                                    className="text-right"
                                  >
                                    Name
                                  </Label>
                                  <Input
                                    id="certification-name"
                                    defaultValue="PMP Certification"
                                    className="col-span-3"
                                  />
                                </div>
                                <div className="grid items-center grid-cols-4 gap-4">
                                  <Label
                                    htmlFor="certification-date"
                                    className="text-right"
                                  >
                                    Date
                                  </Label>
                                  <Input
                                    id="certification-date"
                                    type="date"
                                    defaultValue="2021-09-01"
                                    className="col-span-3"
                                  />
                                </div>
                                <div className="grid items-center grid-cols-4 gap-4">
                                  <Label
                                    htmlFor="certification-issuer"
                                    className="text-right"
                                  >
                                    Issuer
                                  </Label>
                                  <Input
                                    id="certification-issuer"
                                    defaultValue="Project Management Institute"
                                    className="col-span-3"
                                  />
                                </div>
                              </div>
                              <DialogFooter>
                                <Button type="submit">Save Changes</Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                          <Button variant="destructive" size="sm">
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="jobs">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Applied Jobs</CardTitle>
                <CardDescription>
                  View the status of your job applications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Job Title</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Applied On</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Software Engineer</TableCell>
                      <TableCell>Acme Inc.</TableCell>
                      <TableCell>
                        <Badge variant="default" className="bg-green-500">
                          Accepted
                        </Badge>
                      </TableCell>
                      <TableCell>2023-04-15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Product Manager</TableCell>
                      <TableCell>Globex Corp.</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Pending</Badge>
                      </TableCell>
                      <TableCell>2023-05-01</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>UI/UX Designer</TableCell>
                      <TableCell>Stark Industries</TableCell>
                      <TableCell>
                        <Badge variant="destructive">Rejected</Badge>
                      </TableCell>
                      <TableCell>2023-03-20</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Data Analyst</TableCell>
                      <TableCell>Wayne Enterprises</TableCell>
                      <TableCell>
                        <Badge variant="default" className="bg-green-500">
                          Accepted
                        </Badge>
                      </TableCell>
                      <TableCell>2023-06-01</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="projects">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Projects</CardTitle>
                <CardDescription>
                  View and manage your projects.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-end mb-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Add Project</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Add Project</DialogTitle>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
