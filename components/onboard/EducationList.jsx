import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "./Icons";
import { Label } from "@/components/ui/label";

const EducationList = ({
  educations,
  handleEditEducation,
  handleDeleteEducation,
  setShowEducationModal,
}) => (
  <div className="grid gap-2">
    <Label>Education</Label>
    <div className="grid gap-2">
      {educations.map((education, index) => (
        <div
          key={index}
          className="flex justify-between items-center border p-2 rounded"
        >
          <div>
            <div>{education.degree}</div>
            <div>{education.institute}</div>
            <div>
              {education.startDate} - {education.endDate}
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleEditEducation(index)}
            >
              <Pencil />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleDeleteEducation(index)}
            >
              <Trash />
            </Button>
          </div>
        </div>
      ))}
    </div>
    <Button onClick={() => setShowEducationModal(true)} variant="outline">
      Add Education
    </Button>
  </div>
);

export default EducationList;
