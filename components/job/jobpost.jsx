"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { supabase } from "@/lib/supabase";

export default function PostJobComponent() {
  const { user } = useUser();
  const userID = user.id;

  const [formData, setFormData] = useState({
    id: userID,
    jobTitle: "",
    contractType: "",
    duration: "",
    company: "",
    location: "",
    salary: "",
    jobDescription: "",
    responsibilities: "",
    requiredSkills: "",
    benefits: "",
    aboutCompany: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContactTypeChange = (value) => {
    setFormData({ ...formData, contractType: value });
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.from("jobPosts").insert(formData);

      if (error) throw error;
    } catch (error) {
      console.error("An error occurred while posting the job", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Post a New Job</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  placeholder="Enter job title"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contractType">Contract Type</Label>
                <Select
                  id="contractType"
                  name="contractType"
                  value={formData.contractType}
                  onValueChange={handleContactTypeChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select contract type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Contract Type</SelectLabel>
                      <SelectItem value="fulltime">Full-time</SelectItem>
                      <SelectItem value="parttime">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  placeholder="Enter duration"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Enter company name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Enter location"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="salary">Salary</Label>
                <Input
                  id="salary"
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                  placeholder="Enter salary range"
                />
              </div>
              {/* <div className="space-y-2">
                <Label htmlFor="postedDate">Posted Date</Label>
                <Input
                  id="postedDate"
                  name="postedDate"
                  value={formData.postedDate}
                  onChange={handleInputChange}
                  type="date"
                />
              </div> */}
            </div>
            <div className="space-y-2 mt-4">
              <Label htmlFor="jobDescription">Job Description</Label>
              <Textarea
                id="jobDescription"
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleInputChange}
                rows={4}
                placeholder="Enter job description"
              />
            </div>
            <div className="space-y-2 mt-4">
              <Label htmlFor="responsibilities">Responsibilities</Label>
              <Textarea
                id="responsibilities"
                name="responsibilities"
                value={formData.responsibilities}
                onChange={handleInputChange}
                rows={4}
                placeholder="Enter job responsibilities (bullet points)"
              />
            </div>
            <div className="space-y-2 mt-4">
              <Label htmlFor="requiredSkills">Required Skills</Label>
              <Textarea
                id="requiredSkills"
                name="requiredSkills"
                value={formData.requiredSkills}
                onChange={handleInputChange}
                rows={4}
                placeholder="Enter required skills (bullet points)"
              />
            </div>
            <div className="space-y-2 mt-4">
              <Label htmlFor="benefits">Benefits</Label>
              <Textarea
                id="benefits"
                name="benefits"
                value={formData.benefits}
                onChange={handleInputChange}
                rows={4}
                placeholder="Enter job benefits (bullet points)"
              />
            </div>
            <div className="space-y-2 mt-4">
              <Label htmlFor="aboutCompany">About the Company</Label>
              <Textarea
                id="aboutCompany"
                name="aboutCompany"
                value={formData.aboutCompany}
                onChange={handleInputChange}
                rows={4}
                placeholder="Enter information about the company"
              />
            </div>
            <div className="flex justify-end mt-6">
              <Button type="submit" onClick={handleSubmit}>
                Post Job
              </Button>
            </div>
          </form>
        </div>
        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Job Posting Preview</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold">{formData.jobTitle}</h3>
              <p className="text-muted-foreground">
                {formData.contractType} | {formData.duration}
              </p>
            </div>
            <div>
              <h4 className="font-bold">Company</h4>
              <p>{formData.company}</p>
            </div>
            <div>
              <h4 className="font-bold">Location</h4>
              <p>{formData.location}</p>
            </div>
            <div>
              <h4 className="font-bold">Salary</h4>
              <p>{formData.salary}</p>
            </div>
            {/* <div>
              <h4 className="font-bold">Posted Date</h4>
              <p>{formData.postedDate}</p>
            </div> */}
            <div>
              <h4 className="font-bold">Job Description</h4>
              <p>{formData.jobDescription}</p>
            </div>
            <div>
              <h4 className="font-bold">Responsibilities</h4>
              <ul className="list-disc pl-6">
                {formData.responsibilities.split("\n").map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Required Skills</h4>
              <ul className="list-disc pl-6">
                {formData.requiredSkills.split("\n").map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Benefits</h4>
              <ul className="list-disc pl-6">
                {formData.benefits.split("\n").map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold">About the Company</h4>
              <p>{formData.aboutCompany}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
