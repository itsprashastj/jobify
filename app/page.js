"use client";

import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import * as React from "react";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  const [progress, setProgress] = React.useState(13);
  const [visible, setVisible] = React.useState(true);
  const [hide, setHide] = React.useState(false); // New state for triggering animation

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setHide(true), 500); // Trigger hide animation
      setTimeout(() => setVisible(false), 1000); // Set visibility to false after animation
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {visible ? (
        <div
          className={`w-screen h-screen flex flex-col gap-4 items-center justify-center transition-opacity duration-500 ${hide ? 'opacity-0' : 'opacity-100'
            }`}
        >
          <div className="text-4xl font-bold text-zinc-800">
            jobi&nbsp;
            <span className="text-3xl bg-black px-1 rounded-full text-white">fy</span>
          </div>
          <Progress value={progress} className="w-[50%] lg:w-[20%]" />
        </div>
      ) : (
        <div className={`transition-opacity duration-500 ${hide ? 'opacity-100' : 'opacity-0'}`}>
          <NavBar />
          <Hero />
        </div>
      )}
    </div>
  );
}
