"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"


export default function Loading() {
    const [progress, setProgress] = React.useState(13)

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(100), 100)
        return () => clearTimeout(timer)
    }, [])


    return <div>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <Progress value={progress} className="w-[50%] lg:w-[20%]" />
        </div>
    </div>
}
