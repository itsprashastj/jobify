import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Apply() {
  return (
    <div className="bg-transparent p-6 rounded-lg">
      <h2 className="text-2xl font-bold">Apply Now</h2>
      <p className="mt-2 text-muted-foreground">
        Click the button below to apply for this position.
      </p>
      <div className="mt-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">Apply</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Apply for Senior Frontend Developer</DialogTitle>
              <DialogDescription>
                Please fill out the form below to apply for this position.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="col-span-3"
                />
              </div>
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="col-span-3"
                />
              </div>
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="phone" className="text-right">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (123) 456-7890"
                  className="col-span-3"
                />
              </div>
              <div className="grid items-start grid-cols-4 gap-4">
                <Label htmlFor="statement" className="text-right">
                  Statement
                </Label>
                <Textarea
                  id="statement"
                  placeholder="Why are you a good fit for this role?"
                  className="col-span-3 min-h-[100px]"
                />
              </div>
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="resume" className="text-right">
                  Resume
                </Label>
                <Input id="resume" type="file" className="col-span-3" />
              </div>
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="portfolio" className="text-right">
                  Portfolio
                </Label>
                <Input
                  id="portfolio"
                  type="url"
                  placeholder="https://example.com"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Submit Application</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
