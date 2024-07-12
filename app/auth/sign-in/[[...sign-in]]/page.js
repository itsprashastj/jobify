

import { SignIn } from "@clerk/nextjs";

const UserSignIn = () => {
    return (

        <div className="flex items-center justify-center mt-5 ">

            <SignIn />
        </div>
    );
}

export default UserSignIn;
