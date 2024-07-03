import { Button } from "@/components/ui/button";
import { Trash } from "./Icons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const SkillList = ({ skills, handleAddSkill, handleRemoveSkill }) => (
  <div className="grid gap-2">
    <Label>Skills</Label>
    <Input
      placeholder="Enter a skill and press Tab"
      onKeyDown={handleAddSkill}
    />
    <div className="grid gap-2">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex justify-between items-center border p-2 rounded"
        >
          <div>{skill}</div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleRemoveSkill(index)}
          >
            <Trash />
          </Button>
        </div>
      ))}
    </div>
  </div>
);

export default SkillList;
