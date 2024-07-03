import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "./Icons";

import { Label } from "@/components/ui/label";

const ProjectList = ({
  projects,
  handleEditProject,
  handleDeleteProject,
  setShowProjectModal,
}) => (
  <div className="grid gap-2">
    <Label>Projects</Label>
    <div className="grid gap-2">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex justify-between items-center border p-2 rounded"
        >
          <div>
            <div>{project.title}</div>
            <div>{project.description}</div>
            <div>{project.link}</div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleEditProject(index)}
            >
              <Pencil />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleDeleteProject(index)}
            >
              <Trash />
            </Button>
          </div>
        </div>
      ))}
    </div>
    <Button onClick={() => setShowProjectModal(true)}>Add Project</Button>
  </div>
);

export default ProjectList;
