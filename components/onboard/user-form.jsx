"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import EducationModal from "./EducationModal";
import ProjectModal from "./ProjectModal";
import EducationList from "./EducationList";
import ProjectList from "./ProjectList";
import SkillList from "./SkillList";
import LanguageList from "./LanguageList";

export function UserForm() {
  const [activeTab, setActiveTab] = useState("candidate");
  const [educations, setEducations] = useState([]);
  const [showEducationModal, setShowEducationModal] = useState(false);
  const [newEducation, setNewEducation] = useState({
    institute: "",
    degree: "",
    location: "",
    startDate: "",
    endDate: "",
    grade: "",
  });
  const [isEditEducation, setIsEditEducation] = useState(false);

  const [projects, setProjects] = useState([]);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    link: "",
    image: null,
  });
  const [isEditProject, setIsEditProject] = useState(false);

  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);

  const handleAddEducation = () => {
    if (isEditEducation) {
      const updatedEducations = educations.map((edu, index) =>
        index === newEducation.index ? newEducation : edu
      );
      setEducations(updatedEducations);
    } else {
      setEducations([...educations, newEducation]);
    }
    setNewEducation({
      institute: "",
      degree: "",
      location: "",
      startDate: "",
      endDate: "",
      grade: "",
    });
    setShowEducationModal(false);
    setIsEditEducation(false);
  };

  const handleDeleteEducation = (index) => {
    const updatedEducations = educations.filter((_, i) => i !== index);
    setEducations(updatedEducations);
  };

  const handleEditEducation = (index) => {
    setNewEducation({ ...educations[index], index });
    setIsEditEducation(true);
    setShowEducationModal(true);
  };

  const handleAddProject = () => {
    if (isEditProject) {
      const updatedProjects = projects.map((proj, index) =>
        index === newProject.index ? newProject : proj
      );
      setProjects(updatedProjects);
    } else {
      setProjects([...projects, newProject]);
    }
    setNewProject({
      title: "",
      description: "",
      link: "",
      image: null,
    });
    setShowProjectModal(false);
    setIsEditProject(false);
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  const handleEditProject = (index) => {
    setNewProject({ ...projects[index], index });
    setIsEditProject(true);
    setShowProjectModal(true);
  };

  const handleAddSkill = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setSkills([...skills, e.target.value.trim()]);
      e.target.value = "";
    }
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const handleAddLanguage = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setLanguages([...languages, e.target.value.trim()]);
      e.target.value = "";
    }
  };

  const handleRemoveLanguage = (index) => {
    const updatedLanguages = languages.filter((_, i) => i !== index);
    setLanguages(updatedLanguages);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="bg-muted/20 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Onboard with Us</h2>
          <div className="flex items-center gap-2">
            <Button
              variant={activeTab === "candidate" ? "default" : "outline"}
              onClick={() => setActiveTab("candidate")}
            >
              Candidate
            </Button>
            <Button
              variant={activeTab === "recruiter" ? "default" : "outline"}
              onClick={() => setActiveTab("recruiter")}
            >
              Recruiter
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 grid gap-6">
        {activeTab === "candidate" && (
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter your full name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="about">About</Label>
              <Textarea
                id="about"
                placeholder="Tell us about yourself"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <EducationList
                educations={educations}
                handleEditEducation={handleEditEducation}
                handleDeleteEducation={handleDeleteEducation}
                setShowEducationModal={setShowEducationModal}
              />
              <SkillList
                skills={skills}
                handleAddSkill={handleAddSkill}
                handleRemoveSkill={handleRemoveSkill}
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <LanguageList
                languages={languages}
                handleAddLanguage={handleAddLanguage}
                handleRemoveLanguage={handleRemoveLanguage}
              />
              <ProjectList
                projects={projects}
                handleEditProject={handleEditProject}
                handleDeleteProject={handleDeleteProject}
                setShowProjectModal={setShowProjectModal}
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="social">Social Links</Label>
                <div className="flex gap-2">
                  <Input id="linkedin" placeholder="LinkedIn" />
                  <Input id="github" placeholder="GitHub" />
                  <Input id="portfolio" placeholder="Portfolio" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="certifications">Certifications</Label>
                <Input id="certifications" placeholder="Title, Issuing Body" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="resume">Resume</Label>
              <Input id="resume" type="file" />
            </div>
          </div>
        )}
        {activeTab === "recruiter" && (
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" placeholder="Enter your company name" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="recruiter-name">Full Name</Label>
                <Input id="recruiter-name" placeholder="Enter your full name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="recruiter-social">Social Links</Label>
                <div className="flex gap-2">
                  <Input id="recruiter-linkedin" placeholder="LinkedIn" />
                  <Input id="recruiter-website" placeholder="Company Website" />
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button type="submit">Submit</Button>
      </CardFooter>
      {showEducationModal && (
        <EducationModal
          newEducation={newEducation}
          setNewEducation={setNewEducation}
          handleAddEducation={handleAddEducation}
          setShowEducationModal={setShowEducationModal}
          isEdit={isEditEducation}
        />
      )}
      {showProjectModal && (
        <ProjectModal
          newProject={newProject}
          setNewProject={setNewProject}
          handleAddProject={handleAddProject}
          setShowProjectModal={setShowProjectModal}
          isEdit={isEditProject}
        />
      )}
    </Card>
  );
}
