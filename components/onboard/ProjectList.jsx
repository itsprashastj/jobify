import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "./Icons";
import { Label } from "@/components/ui/label";
import Link from "next/link";

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
            <div className="text-2xl font-bold">{project.title}</div>
            <div className="text-sm">{project.description}</div>

            <Link href={project.link} target="_blank">
              View Project
            </Link>
            {project.image && (
              <img
                src={URL.createObjectURL(project.image)}
                alt="Project Image"
                className="mt-2 w-96 h-auto"
              />
            )}
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
    <Button onClick={() => setShowProjectModal(true)} variant="outline">
      Add Project
    </Button>
  </div>
);

export default ProjectList;
