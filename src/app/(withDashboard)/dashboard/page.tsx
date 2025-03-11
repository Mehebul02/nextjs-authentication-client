import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async() => {
  const session = await getServerSession(authOptions)
  return (
    <div>
     {
      session?.user &&
      <>
       <h1 className="text-4xl text-center mt-10">Welcome To {session?.user?.name}</h1>
      <h1 className="text-4xl text-center mt-10">Email:{session?.user?.email}</h1>
      <div className="flex justify-center">
      <Image src={session?.user?.image || "/default-profile.png"} alt="profile" width={200} height={200} 
      className="border-2 border-green-800 rounded-full text-center my-6"/>
      </div>
      </>
     }
    </div>
  );
};

export default DashboardPage;
