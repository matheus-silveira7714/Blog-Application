"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import {FaBars} from 'react-icons/fa'

const AuthLinks = () => {
  const {status} = useSession()
  const [open, setOpen] = useState(false)
  return (
    <>
      {status === "authenticated" ? (
        <>
          <Link className="hidden md:block" href="/write">Write</Link>
          <span onClick={signOut} className="hidden md:block cursor-pointer">Logout</span>
        </>
      ) : (
        <Link className="hidden md:block" href="/login">Login</Link>
      )}
      <div className="cursor-pointer md:hidden" onClick={()=>setOpen(!open)}>
        <FaBars size={22}/>
      </div>
      {open && (
        <div onClick={()=>setOpen(!open)} className="md:hidden flex flex-col absolute top-20 left-0 h-[calc(100vh-80px)] w-full items-center justify-center gap-10 text-3xl bgColor "> 
        <Link className='' href='/'>Home</Link>
        <Link className='' href='/about'>About</Link>
        <Link className='' href='/contact'>Contact</Link>
        { status === "authenticated" ? (
          <>
            <Link href="/write">Write</Link>
            <span onClick={signOut} className="cursor-pointer">Logout</span>
          </>
          ) : (
            <Link href="/login">Login</Link>
        )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
