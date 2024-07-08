import Protal2 from "@/components/portal/portal2";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {



    return (
        <div>
            <Protal2 />
        </div>
    )
}