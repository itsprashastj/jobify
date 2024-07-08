

import { SignIn } from "@clerk/nextjs";

const UserSignIn = () => {
    return (

        <div className="flex items-center justify-center ">

            <SignIn />
        </div>
    );
}

export default UserSignIn;
