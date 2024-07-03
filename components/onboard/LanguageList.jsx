import { Button } from "@/components/ui/button";
import { Trash } from "./Icons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const LanguageList = ({
  languages,
  handleAddLanguage,
  handleRemoveLanguage,
}) => (
  <div className="grid gap-2">
    <Label>Languages</Label>
    <Input
      placeholder="Enter a language and press Tab"
      onKeyDown={handleAddLanguage}
    />
    <div className="grid gap-2">
      {languages.map((language, index) => (
        <div
          key={index}
          className="flex justify-between items-center border p-2 rounded"
        >
          <div>{language}</div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleRemoveLanguage(index)}
          >
            <Trash />
          </Button>
        </div>
      ))}
    </div>
  </div>
);

export default LanguageList;
