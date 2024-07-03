import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FilePenIcon, TrashIcon, XIcon } from "./Icons";

export default function CandidateForm({
  setShowEducationModal,
  setShowProjectModal,
  formData,
  setFormData,
}) {
  const [localFormData, setLocalFormData] = useState(formData);

  useEffect(() => {
    setFormData(localFormData);
  }, [localFormData, setFormData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData({ ...localFormData, [name]: value });
  };

  const handleAddSkill = (e) => {
    if (e.key === "Tab") {
      const newSkills = [
        ...(localFormData.skills || []),
        e.target.value.trim(),
      ];
      setLocalFormData({ ...localFormData, skills: newSkills });
      e.target.value = "";
    }
  };

  const handleRemoveSkill = (index) => {
    const newSkills = localFormData.skills.filter((_, i) => i !== index);
    setLocalFormData({ ...localFormData, skills: newSkills });
  };

  const handleAddLanguage = (e) => {
    if (e.key === "Tab") {
      const newLanguages = [
        ...(localFormData.languages || []),
        e.target.value.trim(),
      ];
      setLocalFormData({ ...localFormData, languages: newLanguages });
      e.target.value = "";
    }
  };

  const handleRemoveLanguage = (index) => {
    const newLanguages = localFormData.languages.filter((_, i) => i !== index);
    setLocalFormData({ ...localFormData, languages: newLanguages });
  };

  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          value={localFormData.name || ""}
          onChange={handleInputChange}
          placeholder="Enter your full name"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="about">About</Label>
        <Textarea
          id="about"
          name="about"
          value={localFormData.about || ""}
          onChange={handleInputChange}
          placeholder="Tell us about yourself"
          rows={3}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="education">Education</Label>
        <Button variant="outline" onClick={() => setShowEducationModal(true)}>
          Add Education
        </Button>
        {localFormData.educations &&
          localFormData.educations.map((education, index) => (
            <div
              key={index}
              className="grid grid-cols-2 gap-4 border rounded-md p-4"
            >
              {/* Display education details */}
            </div>
          ))}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="skills">Key Skills</Label>
        <Input
          id="skills"
          placeholder="Enter a skill and press Tab"
          onKeyDown={handleAddSkill}
        />
        <div className="flex flex-wrap gap-2">
          {localFormData.skills &&
            localFormData.skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-muted px-2 py-1 rounded-md text-sm"
              >
                <span>{skill}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveSkill(index)}
                >
                  <XIcon className="h-4 w-4" />
                </Button>
              </div>
            ))}
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="languages">Languages</Label>
        <Input
          id="languages"
          placeholder="Enter a language and press Tab"
          onKeyDown={handleAddLanguage}
        />
        <div className="flex flex-wrap gap-2">
          {localFormData.languages &&
            localFormData.languages.map((language, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-muted px-2 py-1 rounded-md text-sm"
              >
                <span>{language}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveLanguage(index)}
                >
                  <XIcon className="h-4 w-4" />
                </Button>
              </div>
            ))}
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="projects">Projects</Label>
        <Button variant="outline" onClick={() => setShowProjectModal(true)}>
          Add Project
        </Button>
        {localFormData.projects &&
          localFormData.projects.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-2 gap-4 border rounded-md p-4"
            >
              {/* Display project details */}
            </div>
          ))}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="social">Social Links</Label>
        <div className="flex gap-2">
          <Input
            id="linkedin"
            name="linkedin"
            value={localFormData.linkedin || ""}
            onChange={handleInputChange}
            placeholder="LinkedIn"
          />
          <Input
            id="github"
            name="github"
            value={localFormData.github || ""}
            onChange={handleInputChange}
            placeholder="GitHub"
          />
          <Input
            id="portfolio"
            name="portfolio"
            value={localFormData.portfolio || ""}
            onChange={handleInputChange}
            placeholder="Portfolio"
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="certifications">Certifications</Label>
        <Input
          id="certifications"
          name="certifications"
          value={localFormData.certifications || ""}
          onChange={handleInputChange}
          placeholder="Title, Issuing Body"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="resume">Resume</Label>
        <Input
          id="resume"
          type="file"
          onChange={(e) =>
            setLocalFormData({
              ...localFormData,
              resume: e.target.files[0]?.name,
            })
          }
        />
      </div>
    </div>
  );
}
