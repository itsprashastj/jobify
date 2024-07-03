import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function EducationModal({
  setShowEducationModal,
  formData,
  setFormData,
}) {
  const [newEducation, setNewEducation] = useState({
    institute: "",
    degree: "",
    location: "",
    startDate: "",
    endDate: "",
    grade: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEducation({ ...newEducation, [name]: value });
  };

  const handleAddEducation = () => {
    const updatedEducations = [...(formData.educations || []), newEducation];
    setFormData({ ...formData, educations: updatedEducations });
    setShowEducationModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">Add Education</h3>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="institute">Institute Name</Label>
            <Input
              id="institute"
              name="institute"
              value={newEducation.institute}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="degree">Degree Name</Label>
            <Input
              id="degree"
              name="degree"
              value={newEducation.degree}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              value={newEducation.location}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                name="startDate"
                type="date"
                value={newEducation.startDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="endDate">End Date</Label>
              <Input
                id="endDate"
                name="endDate"
                type="date"
                value={newEducation.endDate}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="grade">Grade</Label>
            <Input
              id="grade"
              name="grade"
              value={newEducation.grade}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="ghost" onClick={() => setShowEducationModal(false)}>
            Cancel
          </Button>
          <Button onClick={handleAddEducation}>Add</Button>
        </div>
      </div>
    </div>
  );
}
