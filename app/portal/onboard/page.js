import { UserForm } from "@/components/onboard/user-form";
import Component from "@/components/users";

import { currentUser } from "@clerk/nextjs/server";


export default async function bye() {

    const user = await currentUser();

    return (
        <div className="mt-4">
            {/* <UserForm user={JSON.parse(JSON.stringify(user))} /> */}
            <UserForm />
        </div>
    )
};