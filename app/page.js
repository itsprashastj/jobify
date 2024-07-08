

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import HomeLanding from "./home/page";


export default async function Home() {



  const user = await currentUser();
  // console.log(user, "user");

  const userProfile = true;

  // if (user && userProfile?._id) redirect('/portal/dashboard')

  // if (user && !userProfile?._id) redirect('/portal/onboard')

  return (
    <HomeLanding user={JSON.parse(JSON.stringify(user))} />
  )

}
