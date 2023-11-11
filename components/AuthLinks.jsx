"use client";
import Link from "next/link";
import React, { useState } from "react";
import {FaBars} from 'react-icons/fa'

const AuthLinks = () => {
  const [open, setOpen] = useState(false)
  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link className="hidden md:block" href="/login">Login</Link>
      ) : (
        <>
          <Link className="hidden md:block" href="/write">Write</Link>
          <span className="hidden md:block cursor-pointer">Logout</span>
        </>
      )}
      <div className="cursor-pointer md:hidden" onClick={()=>setOpen(!open)}>
        <FaBars/>
      </div>
      {open && (
        <div className="md:hidden flex flex-col absolute top-20 left-0 h-[calc(100vh-80px)] w-full items-center justify-center gap-10 text-3xl bgColor "> 
        <Link className='' href='/'>Home</Link>
        <Link className='' href='/about'>About</Link>
        <Link className='' href='/contact'>Contact</Link>
        { status === "notauthenticated" ? (
          <Link href="/login">Login</Link>
          ) : (
          <>
            <Link href="/write">Write</Link>
            <span className="cursor-pointer">Logout</span>
          </>
        )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
