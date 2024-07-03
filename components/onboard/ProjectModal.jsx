import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";

const ProjectModal = ({
  newProject,
  setNewProject,
  handleAddProject,
  setShowProjectModal,
  isEdit,
}) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Check if the name is "link" and update the value accordingly
    const correctedValue =
      name === "link" && !/^https?:\/\//i.test(value)
        ? `https://${value}`
        : value;

    setNewProject((prev) => ({ ...prev, [name]: correctedValue }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      setNewProject((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload an image file (PNG or JPG)");
    }
  };

  useEffect(() => {
    if (!isEdit) {
      setNewProject({
        title: "",
        description: "",
        link: "",
        image: null,
      });
      setImagePreview(null);
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
              type="url"
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
              accept="image/png, image/jpeg"
              onChange={handleImageChange}
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Image Preview"
                className="mt-2 w-full h-auto"
              />
            )}
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
