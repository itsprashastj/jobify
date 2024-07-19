import PostJobComponent from "@/components/job/jobpost";
import InputForm from "@/components/job/yui";
import { currentUser } from "@clerk/nextjs/server";


export default async function PostJob() {
    const user = await currentUser();
    return (
        <div>
            <PostJobComponent user={JSON.parse(JSON.stringify(user))} />
            {/* <InputForm /> */}
        </div>
    )
}