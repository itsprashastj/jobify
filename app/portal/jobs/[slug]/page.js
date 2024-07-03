
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
    return (
        <div className="bg-secondary mx-4 rounded-xl text-foreground">
            <div className="container mx-4 py-12 px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
                    <div className="bg-muted p-6 rounded-lg">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold">Senior Frontend Developer</h1>
                            <div className="flex items-center gap-2">
                                <div className="rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                                    Full-time
                                </div>
                                <div className="text-muted-foreground">Acme Inc.</div>
                            </div>
                        </div>
                        <div className="mt-8 space-y-6">
                            <div className="bg-background p-6 rounded-lg">
                                <h2 className="text-2xl font-bold">Job Description</h2>
                                <p className="mt-2 text-muted-foreground">
                                    We are seeking an experienced Frontend Developer to join our growing team. In this role, you will be
                                    responsible for building and maintaining high-performance, scalable web applications using modern
                                    JavaScript frameworks and libraries.
                                </p>
                            </div>
                            <div className="bg-background p-6 rounded-lg">
                                <h2 className="text-2xl font-bold">Responsibilities</h2>
                                <ul className="mt-2 list-disc space-y-2 pl-6 text-muted-foreground">
                                    <li>Develop and implement new features and functionality</li>
                                    <li>Optimize and refactor existing code to improve performance and maintainability</li>
                                    <li>Collaborate with designers and backend developers to ensure a seamless user experience</li>
                                    <li>Participate in code reviews and provide feedback to teammates</li>
                                    <li>Stay up-to-date with the latest frontend technologies and best practices</li>
                                </ul>
                            </div>
                            <div className="bg-background p-6 rounded-lg">
                                <h2 className="text-2xl font-bold">Required Skills</h2>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    <div className="rounded-full bg-muted px-3 py-1 text-sm font-medium">React</div>
                                    <div className="rounded-full bg-muted px-3 py-1 text-sm font-medium">JavaScript</div>
                                    <div className="rounded-full bg-muted px-3 py-1 text-sm font-medium">TypeScript</div>
                                    <div className="rounded-full bg-muted px-3 py-1 text-sm font-medium">CSS/SCSS</div>
                                    <div className="rounded-full bg-muted px-3 py-1 text-sm font-medium">Git</div>
                                    <div className="rounded-full bg-muted px-3 py-1 text-sm font-medium">Agile Methodologies</div>
                                </div>
                            </div>
                            <div className="bg-background p-6 rounded-lg">
                                <h2 className="text-2xl font-bold">What We Offer</h2>
                                <ul className="mt-2 list-disc space-y-2 pl-6 text-muted-foreground">
                                    <li>Competitive salary and benefits package</li>
                                    <li>Opportunities for career growth and development</li>
                                    <li>Flexible work arrangements</li>
                                    <li>Collaborative and supportive team environment</li>
                                    <li>Modern and well-equipped office space</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-background p-6 rounded-lg">
                            <h2 className="text-2xl font-bold">Apply Now</h2>
                            <p className="mt-2 text-muted-foreground">Click the button below to apply for this position.</p>
                            <div className="mt-4">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button className="w-full">Apply</Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[600px]">
                                        <DialogHeader>
                                            <DialogTitle>Apply for Senior Frontend Developer</DialogTitle>
                                            <DialogDescription>Please fill out the form below to apply for this position.</DialogDescription>
                                        </DialogHeader>
                                        <div className="grid gap-4 py-4">
                                            <div className="grid items-center grid-cols-4 gap-4">
                                                <Label htmlFor="name" className="text-right">
                                                    Name
                                                </Label>
                                                <Input id="name" placeholder="John Doe" className="col-span-3" />
                                            </div>
                                            <div className="grid items-center grid-cols-4 gap-4">
                                                <Label htmlFor="email" className="text-right">
                                                    Email
                                                </Label>
                                                <Input id="email" type="email" placeholder="john@example.com" className="col-span-3" />
                                            </div>
                                            <div className="grid items-center grid-cols-4 gap-4">
                                                <Label htmlFor="phone" className="text-right">
                                                    Phone
                                                </Label>
                                                <Input id="phone" type="tel" placeholder="+1 (123) 456-7890" className="col-span-3" />
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
                                                <Input id="portfolio" type="url" placeholder="https://example.com" className="col-span-3" />
                                            </div>
                                        </div>
                                        <DialogFooter>
                                            <Button type="submit">Submit Application</Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                        <div className="bg-background p-6 rounded-lg">
                            <h2 className="text-2xl font-bold">About Acme Inc.</h2>
                            <p className="mt-2 text-muted-foreground">
                                Acme Inc. is a leading technology company that specializes in building innovative web applications. We
                                are committed to creating a diverse and inclusive work environment where everyone can thrive.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}