"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Image from "next/image";

const AuthLinks = () => {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  let isAuthenticated = status === "authenticated";
  return (
    <>
      {isAuthenticated ? (
        <>
          <Link className="hidden md:block" href="/write">
            Write
          </Link>
          <Link href="/profile">
            <Image
              src={session?.user?.image}
              alt="profile"
              width={30}
              height={30}
              className="object-cover object-center rounded-full w-full h-full flex-1"
            />
          </Link>
        </>
      ) : (
        <Link className="hidden md:block" href="/login">
          Login
        </Link>
      )}
      <div className="cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
        <FaBars size={22} />
      </div>
      {open && (
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col absolute top-20 left-0 h-[calc(100vh-80px)] w-full items-center justify-center gap-10 text-3xl bgColor "
        >
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          {isAuthenticated ? (
            <Link href="/write">Write</Link>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
