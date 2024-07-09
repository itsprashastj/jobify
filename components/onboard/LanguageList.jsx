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
      placeholder="Enter a language and press Enter to save"
      onKeyDown={handleAddLanguage}
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-fit">
      {languages.map((language, index) => (
        <div
          key={index}
          className="flex gap-4 justify-between items-center p-2 rounded-xl bg-primary text-primary-foreground text-sm"
        >
          <div>{language}</div>
          <div
            size="icon"
            className="text-primary-foreground"
            onClick={() => handleRemoveLanguage(index)}
          >
            <Trash />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default LanguageList;
