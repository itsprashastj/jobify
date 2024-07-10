
"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
    const [file, setFile] = useState(null)
    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (file) {
            console.log("File details:", file)
        } else {
            console.log("No file selected")
        }
    }
    return (
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
            <div className="max-w-3xl mx-auto">
                <div className="space-y-4 text-center">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upload a File</h1>
                    <p className="text-muted-foreground md:text-xl">Upload a PDF or image file and we'll display it for you.</p>
                </div>
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    <div>
                        <Label htmlFor="file" className="block mb-2">
                            File
                        </Label>
                        <Input id="file" type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileChange} className="w-full" />
                    </div>
                    <Button type="submit" className="w-full">
                        Submit
                    </Button>
                </form>
                {file && (
                    <div className="mt-8">
                        {file.type.startsWith("image/") ? (
                            <img src="/placeholder.svg" alt={file.name} width={600} height={400} className="mx-auto rounded-lg" />
                        ) : (
                            <div className="bg-muted p-4 rounded-lg">
                                <p className="font-medium">
                                    {file.name} ({file.size} bytes)
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}