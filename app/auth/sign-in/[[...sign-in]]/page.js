import { SignIn } from "@clerk/nextjs"


export default function FormSignIn() {
    return (
        <div className="flex justify-center items-center mb-10">
            <SignIn />
        </div>

    )

}