"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";

const getData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/profile`,{cache:'no-cache'});
    const data = await res.json();
    if (res.ok) return data;
    else throw new Error(data);
  } catch (error) {
    throw new Error(error.message);
  }
};

const page = () => {
  const { data:session,status } = useSession();
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setData(data);
      } catch (error) {
        console.error("Error fetching posts:", error.message);
      }
    };
    fetchData();
  }, []);

  if (status === "unauthenticated") {
    router.push("/login");
  }

  return (
    <div className="lg:mt-3">
      <div className="flex justify-between items-center mb-2">
        <h1 className=" font-bold text-2xl lg:text-3xl text-rose-500">Your Profile</h1>
        <span onClick={signOut} className="w-fit px-5 py-2 softBg rounded-lg cursor-pointer">Logout</span>
      </div>
      <p className="text-lg mb-3 lg:mb-4">
        Welcome <span className="font-bold">{session?.user?.name}</span> to your personlized profile page.<br/> Share your experiences
        and inspire others with your thoughts.
      </p>
      { data?.length >0 && <h2 className="font-semibold text-2xl mb-3 lg:mb-5">Recent Blogs</h2>}
      {data?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 xl:gap-7">
          { data?.map((item) => ( 
            <BlogCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="min-h-[50vh] xl:min-h-[40vh] flex flex-col items-center justify-center gap-3 w-full mx-auto font-semibold">
          <p className="text-2xl text-center">You don't have any blogs in your profile.</p>
          <Link
            href="/write"
            className="w-fit mx-auto px-5 py-3 softBg rounded-lg"
          >
            Start writing
          </Link>
        </div>
      )}
    </div>
  );
};

export default page;
