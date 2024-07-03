// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";

// const EducationModal = ({
//   newEducation,
//   setNewEducation,
//   handleAddEducation,
//   setShowEducationModal,
// }) => (
//   <div className="w-full max-w-md ml-10">
//     <div>
//       <h1 className="font-bold text-2xl mb-2">Add Education</h1>
//     </div>
//     <div className="grid gap-4">
//       <div className="grid gap-2">
//         <Label htmlFor="institute">Institute Name </Label>
//         <Input
//           id="institute"
//           value={newEducation.institute}
//           onChange={(e) =>
//             setNewEducation({ ...newEducation, institute: e.target.value })
//           }
//           placeholder="Institute Name"
//         />
//       </div>
//       <div className="grid gap-2">
//         <Label htmlFor="degree">Degree</Label>
//         <Input
//           id="degree"
//           value={newEducation.degree}
//           onChange={(e) =>
//             setNewEducation({ ...newEducation, degree: e.target.value })
//           }
//           placeholder="Degree"
//         />
//       </div>
//       <div className="grid gap-2">
//         <Label htmlFor="location">Location</Label>
//         <Input
//           id="location"
//           value={newEducation.location}
//           onChange={(e) =>
//             setNewEducation({ ...newEducation, location: e.target.value })
//           }
//           placeholder="Location"
//         />
//       </div>
//       <div className="grid gap-2">
//         <Label htmlFor="startDate">Start Date</Label>
//         <Input
//           id="startDate"
//           value={newEducation.startDate}
//           onChange={(e) =>
//             setNewEducation({ ...newEducation, startDate: e.target.value })
//           }
//           placeholder="Start Date"
//         />
//       </div>
//       <div className="grid gap-2">
//         <Label htmlFor="endDate">End Date</Label>
//         <Input
//           id="endDate"
//           value={newEducation.endDate}
//           onChange={(e) =>
//             setNewEducation({ ...newEducation, endDate: e.target.value })
//           }
//           placeholder="End Date"
//         />
//       </div>
//       <div className="grid gap-2">
//         <Label htmlFor="grade">Grade</Label>
//         <Input
//           id="grade"
//           value={newEducation.grade}
//           onChange={(e) =>
//             setNewEducation({ ...newEducation, grade: e.target.value })
//           }
//           placeholder="Grade"
//         />
//       </div>
//       <div className="flex justify-end gap-4">
//         <Button variant="outline" onClick={() => setShowEducationModal(false)}>
//           Cancel
//         </Button>
//         <Button onClick={handleAddEducation}>Add</Button>
//       </div>
//     </div>
//   </div>
// );

// export default EducationModal;

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";

const EducationModal = ({
  newEducation,
  setNewEducation,
  handleAddEducation,
  setShowEducationModal,
  isEdit,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEducation((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    // Clear form when the modal is closed
    if (!isEdit) {
      setNewEducation({
        institute: "",
        degree: "",
        location: "",
        startDate: "",
        endDate: "",
        grade: "",
      });
    }
  }, [isEdit, setNewEducation]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">
          {isEdit ? "Edit Education" : "Add Education"}
        </h3>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="institute">Institute Name</Label>
            <Input
              id="institute"
              name="institute"
              value={newEducation.institute}
              onChange={handleInputChange}
              placeholder="Institute Name"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="degree">Degree Name</Label>
            <Input
              id="degree"
              name="degree"
              value={newEducation.degree}
              onChange={handleInputChange}
              placeholder="Degree Name"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              value={newEducation.location}
              onChange={handleInputChange}
              placeholder="Location"
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
              placeholder="Grade"
            />
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="ghost" onClick={() => setShowEducationModal(false)}>
            Cancel
          </Button>
          <Button onClick={handleAddEducation}>
            {isEdit ? "Save" : "Add"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EducationModal;
