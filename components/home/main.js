"use client";
import * as React from "react";
import { Progress } from "@/components/ui/progress";
import Landing from "./landing";
import { supabase } from "@/lib/supabase";
import { redirect, useRouter } from "next/navigation";

export default function Lol({ user }) {
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

    const userID = user?.id;
    const router = useRouter();

    React.useEffect(() => {
        const checkUserOnboarded = async () => {
            if (user) {
                const { data, error } = await supabase
                    .from("users")
                    .select("isOnboarded, role")
                    .eq("id", userID)
                    .single();

                if (error) {
                    console.error(error);
                    return;
                } else if (data) {
                    if (data.isOnboarded) {
                        console.log("User is onboarded");
                        if (data.role === "candidate") {
                            router.push("/portal/dashboard");
                        }
                        if (data.role === "recruiter") {
                            router.push("/recruiter/dashboard");
                        }

                    }
                } else {
                    console.log("User is not onboarded");
                    router.push("/portal/onboard");
                }
            } else {
                console.log("User is not logged in");
            }
        };

        checkUserOnboarded();

    }, [user]);




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
