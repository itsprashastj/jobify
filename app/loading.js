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
        <div className="fixed inset-0 flex flex-col gap-4 z-50 items-center justify-center bg-white">
            <div className="text-4xl font-bold text-zinc-800">
                jobi&nbsp;
                <span className="text-3xl bg-black px-1 rounded-full text-white">fy</span>
            </div>
            <Progress value={progress} className="w-[50%] lg:w-[20%]" />
        </div>
    </div>
}
