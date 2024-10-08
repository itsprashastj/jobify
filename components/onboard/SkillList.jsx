import { Button } from "@/components/ui/button";
import { Trash } from "./Icons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const SkillList = ({ skills, handleAddSkill, handleRemoveSkill }) => (
  <div className="grid gap-2">
    <Label>Skills</Label>
    <Input
      placeholder="Enter a skill and press Enter to save"
      onKeyDown={handleAddSkill}
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-fit">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex gap-4 justify-between items-center p-2 rounded-xl bg-primary text-primary-foreground text-sm"
        >
          <div>{skill}</div>
          <div
            size="icon"
            className="text-primary-foreground"
            onClick={() => handleRemoveSkill(index)}
          >
            <Trash />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillList;
