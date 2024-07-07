

// import Hero from "@/components/hero";
import { currentUser } from "@clerk/nextjs/server";

import BeforeLogin from "@/components/beforeLogin";
import { redirect } from "next/navigation";
import HeroSection from "@/components/hero";


export default async function Home() {

  const user = await currentUser();
  // console.log(user, "user");

  const userProfile = null;

  if (user && !userProfile?._id) redirect('/onboard')


  return (
    <div>

      {/* <HeroSection /> */}

      <BeforeLogin user={user} />
    </div>
  );
}
