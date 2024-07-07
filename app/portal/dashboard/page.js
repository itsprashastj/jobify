import { AlertDestructive } from "@/components/alert";
import Portal from "@/components/portal/portal";
import Protal2 from "@/components/portal/portal2";
import { ToastDestructive } from "@/components/toast";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {

    const user = await currentUser();

    const userProfile = null;

    if (user && !userProfile) {

        <ToastDestructive />
    }


    return (
        <div>
            {/* <Portal /> */}
            <Protal2 />
        </div>
    )
}