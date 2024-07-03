import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function RecruiterForm({ formData, setFormData }) {
  const [localFormData, setLocalFormData] = useState(formData);

  useEffect(() => {
    setFormData(localFormData);
  }, [localFormData, setFormData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData({ ...localFormData, [name]: value });
  };

  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="company">Company Name</Label>
        <Input
          id="company"
          name="company"
          value={localFormData.company || ""}
          onChange={handleInputChange}
          placeholder="Enter your company name"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="recruiter-name">Full Name</Label>
          <Input
            id="recruiter-name"
            name="recruiterName"
            value={localFormData.recruiterName || ""}
            onChange={handleInputChange}
            placeholder="Enter your full name"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="recruiter-social">Social Links</Label>
          <div className="flex gap-2">
            <Input
              id="recruiter-linkedin"
              name="recruiterLinkedin"
              value={localFormData.recruiterLinkedin || ""}
              onChange={handleInputChange}
              placeholder="LinkedIn"
            />
            <Input
              id="recruiter-website"
              name="recruiterWebsite"
              value={localFormData.recruiterWebsite || ""}
              onChange={handleInputChange}
              placeholder="Company Website"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
