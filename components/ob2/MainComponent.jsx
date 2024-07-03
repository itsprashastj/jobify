"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CandidateForm from "./CandidateForm";
import RecruiterForm from "./RecruiterForm";
import EducationModal from "./EducationModal";
import ProjectModal from "./ProjectModel";

export default function MainComponent() {
  const [activeTab, setActiveTab] = useState("candidate");
  const [showEducationModal, setShowEducationModal] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [formData, setFormData] = useState({
    candidate: {},
    recruiter: {},
  });

  const handleSubmit = () => {
    const jsonData = JSON.stringify(formData, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "onboarding_data.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        {activeTab === "candidate" ? (
          <CandidateForm
            setShowEducationModal={setShowEducationModal}
            setShowProjectModal={setShowProjectModal}
            formData={formData.candidate}
            setFormData={(data) =>
              setFormData({ ...formData, candidate: data })
            }
          />
        ) : (
          <RecruiterForm
            formData={formData.recruiter}
            setFormData={(data) =>
              setFormData({ ...formData, recruiter: data })
            }
          />
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleSubmit}>Submit</Button>
      </CardFooter>
      {showEducationModal && (
        <EducationModal
          setShowEducationModal={setShowEducationModal}
          formData={formData.candidate}
          setFormData={(data) => setFormData({ ...formData, candidate: data })}
        />
      )}
      {showProjectModal && (
        <ProjectModal
          setShowProjectModal={setShowProjectModal}
          formData={formData.candidate}
          setFormData={(data) => setFormData({ ...formData, candidate: data })}
        />
      )}
    </Card>
  );
}
