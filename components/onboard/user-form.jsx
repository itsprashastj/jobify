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

export function UserForm({ user }) {
  const [activeTab, setActiveTab] = useState("candidate");

  const [isAnyFieldFilled, setIsAnyFieldFilled] = useState(false);

  const handleFieldChange = (setter) => (e) => {
    setter(e.target.value);
    setIsAnyFieldFilled(true);
  };

  // Recruiter form state
  const [companyName, setCompanyName] = useState("");
  const [recruiterName, setRecruiterName] = useState("");
  const [recruiterSocial, setRecruiterSocial] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");

  // Candidate form state
  const [candidateName, setCandidateName] = useState("");
  const [about, setAbout] = useState("");

  // Education modal state
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

  // Skill modal state
  const [skills, setSkills] = useState([]);

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

  // Language modal state
  const [languages, setLanguages] = useState([]);

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

  // Project modal state
  const [projects, setProjects] = useState([]);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    link: "",
    image: null,
  });
  const [isEditProject, setIsEditProject] = useState(false);

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

  const [linkedIn, setLinkedInLink] = useState("");
  const [github, setGithubLink] = useState("");
  const [portfolio, setPortfolioLink] = useState("");
  const [certifications, setCertifications] = useState("");

  // Resume state and Handler
  const [resume, setResume] = useState(null);

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
    setIsAnyFieldFilled(true);
  };

  const currentUserId = user?.id;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (activeTab === "recruiter") {
      console.log({
        currentUserId,
        companyName,
        recruiterName,
        recruiterSocial,
        companyWebsite,
      });

      // Reset form fields
      setCompanyName("");
      setRecruiterName("");
      setRecruiterSocial("");
      setCompanyWebsite("");
      setIsAnyFieldFilled(false);
    } else if (activeTab === "candidate") {
      console.log({
        currentUserId,
        candidateName,
        about,
        educations,
        skills,
        languages,
        projects,
        socialLinks: {
          linkedIn,
          github,
          portfolio,
        },
        certifications,
        resume,
      });

      // Reset form fields
      setCandidateName("");
      setAbout("");
      setEducations([]);
      setSkills([]);
      setLanguages([]);
      setProjects([]);
      setLinkedInLink("");
      setGithubLink("");
      setPortfolioLink("");
      setCertifications("");
      setResume(null);
      setIsAnyFieldFilled(false);
    }
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
              disabled={isAnyFieldFilled && activeTab !== "candidate"}
            >
              Candidate
            </Button>
            <Button
              variant={activeTab === "recruiter" ? "default" : "outline"}
              onClick={() => setActiveTab("recruiter")}
              disabled={isAnyFieldFilled && activeTab !== "recruiter"}
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
              <Input
                id="name"
                placeholder="Enter your full name"
                value={candidateName}
                onChange={handleFieldChange(setCandidateName)}
                disabled={isAnyFieldFilled && activeTab !== "candidate"}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="about">About</Label>
              <Textarea
                id="about"
                placeholder="Tell us about yourself"
                rows={3}
                value={about}
                onChange={handleFieldChange(setAbout)}
                disabled={isAnyFieldFilled && activeTab !== "candidate"}
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
                  <Input
                    id="linkedin"
                    placeholder="LinkedIn"
                    value={linkedIn}
                    onChange={handleFieldChange(setLinkedInLink)}
                    disabled={isAnyFieldFilled && activeTab !== "candidate"}
                  />
                  <Input
                    id="github"
                    placeholder="GitHub"
                    value={github}
                    onChange={handleFieldChange(setGithubLink)}
                    disabled={isAnyFieldFilled && activeTab !== "candidate"}
                  />
                  <Input
                    id="portfolio"
                    placeholder="Portfolio"
                    value={portfolio}
                    onChange={handleFieldChange(setPortfolioLink)}
                    disabled={isAnyFieldFilled && activeTab !== "candidate"}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="certifications">Certifications</Label>
                <Input
                  id="certifications"
                  placeholder="Title, Issuing Body"
                  value={certifications}
                  onChange={handleFieldChange(setCertifications)}
                  disabled={isAnyFieldFilled && activeTab !== "candidate"}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="resume">Resume</Label>
              <Input
                id="resume"
                type="file"
                accept=".pdf, .jpg, .jpeg, .png"
                onChange={handleResumeChange}
                disabled={isAnyFieldFilled && activeTab !== "candidate"}
              />
            </div>
          </div>
        )}
        {activeTab === "recruiter" && (
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                placeholder="Enter your company name"
                value={companyName}
                onChange={handleFieldChange(setCompanyName)}
                disabled={isAnyFieldFilled && activeTab !== "recruiter"}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="recruiter-name">Full Name</Label>
                <Input
                  id="recruiter-name"
                  placeholder="Enter your full name"
                  value={recruiterName}
                  onChange={handleFieldChange(setRecruiterName)}
                  disabled={isAnyFieldFilled && activeTab !== "recruiter"}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="recruiter-social">Social Links</Label>
                <div className="flex gap-2">
                  <Input
                    id="recruiter-linkedin"
                    value={recruiterSocial}
                    onChange={handleFieldChange(setRecruiterSocial)}
                    placeholder="LinkedIn"
                    disabled={isAnyFieldFilled && activeTab !== "recruiter"}
                  />
                  <Input
                    id="recruiter-website"
                    value={companyWebsite}
                    onChange={handleFieldChange(setCompanyWebsite)}
                    placeholder="Company Website"
                    disabled={isAnyFieldFilled && activeTab !== "recruiter"}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
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
