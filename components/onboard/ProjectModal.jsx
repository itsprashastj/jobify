import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";

const ProjectModal = ({
  newProject,
  setNewProject,
  handleAddProject,
  setShowProjectModal,
  isEdit,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewProject((prev) => ({ ...prev, image: file }));
  };

  useEffect(() => {
    // Clear form when the modal is closed
    if (!isEdit) {
      setNewProject({
        title: "",
        description: "",
        link: "",
        image: null,
      });
    }
  }, [isEdit, setNewProject]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">
          {isEdit ? "Edit Project" : "Add Project"}
        </h3>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Project Title</Label>
            <Input
              id="title"
              name="title"
              value={newProject.title}
              onChange={handleInputChange}
              placeholder="Project Title"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Project Description</Label>
            <Textarea
              id="description"
              name="description"
              value={newProject.description}
              onChange={handleInputChange}
              placeholder="Project Description"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="link">Project Link</Label>
            <Input
              id="link"
              name="link"
              value={newProject.link}
              onChange={handleInputChange}
              placeholder="Project Link"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="image">Project Image</Label>
            <Input
              id="image"
              name="image"
              type="file"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="ghost" onClick={() => setShowProjectModal(false)}>
            Cancel
          </Button>
          <Button onClick={handleAddProject}>{isEdit ? "Save" : "Add"}</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
