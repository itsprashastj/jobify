import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ProjectModal({
  setShowProjectModal,
  formData,
  setFormData,
}) {
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    link: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };
  const handleAddProject = () => {
    const updatedProjects = [...(formData.projects || []), newProject];
    setFormData({ ...formData, projects: updatedProjects });
    setShowProjectModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">Add Project</h3>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="project-title">Project Title</Label>
            <Input
              id="project-title"
              name="title"
              value={newProject.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="project-description">Project Description</Label>
            <Textarea
              id="project-description"
              name="description"
              value={newProject.description}
              onChange={handleInputChange}
              rows={3}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="project-link">Project Link</Label>
            <Input
              id="project-link"
              name="link"
              value={newProject.link}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="project-image">Project Image</Label>
            <Input
              id="project-image"
              type="file"
              onChange={(e) =>
                setNewProject({ ...newProject, image: e.target.files[0]?.name })
              }
            />
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="ghost" onClick={() => setShowProjectModal(false)}>
            Cancel
          </Button>
          <Button onClick={handleAddProject}>Add</Button>
        </div>
      </div>
    </div>
  );
}
