"use client";
import * as React from "react";
import { Progress } from "@/components/ui/progress";
import Landing from "@/components/landing";

export default function HomeLanding({ user }) {
    const [progress, setProgress] = React.useState(13);
    const [visible, setVisible] = React.useState(true);
    const [hide, setHide] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(100);
            setTimeout(() => setHide(true), 250); // Trigger hide animation
            setTimeout(() => setVisible(false), 500); // Set visibility to false after animation
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    console.log(user, "user");

    return (
        <div>
            {visible ? (
                <div
                    className={`fixed inset-0 z-50 flex flex-col gap-4 items-center justify-center transition-opacity duration-500 ${hide ? "opacity-0" : "opacity-100"
                        }`}
                >
                    <div className="text-4xl font-bold text-zinc-800">
                        jobi&nbsp;
                        <span className="text-3xl bg-black px-1 rounded-full text-white">
                            fy
                        </span>
                    </div>
                    <Progress value={progress} className="w-[50%] lg:w-[20%]" />
                </div>
            ) : (
                <div
                    className={`transition-opacity duration-500 ${hide ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Landing />
                </div>
            )}
        </div>
    );
}
