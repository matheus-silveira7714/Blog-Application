import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="lg:mt-10 pb-4 lg:py-7 flex flex-col gap-4 sm:flex-row items-center justify-between softText">
      <div className="flex flex-1 gap-4 flex-col">
        <div className="flex gap-3 font-bold text-lg lg:text-2xl textColor items-center">
          <Image
            src="/logo.png"
            alt=""
            width={50}
            height={50}
            className="object-cover"
          />
          <h1>VBlog</h1>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit suscipit ea debitis molestiae, esse a, aspernatur,
          consequuntur magni inventore nam officiis tempore corporis voluptatum
          vel ratione accusantium optio ex. Aut?
        </p>
        <div className="flex gap-3 justify-center">
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
          <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
          <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        </div>
      </div>
      <div className="flex flex-1 gap-10 md:gap-20 justify-center">
        <div className="flex  flex-col items-center">
          <span className="font-bold textColor mb-1">Links</span>
          <Link href='/'>Home</Link>
          <Link href='/'>Blog</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>
        <div className="flex  flex-col items-center">
          <span className="font-bold textColor mb-1">Tags</span>
          <Link href='/'>Style</Link>
          <Link href='/'>Food</Link>
          <Link href='/'>Fashion</Link>
          <Link href='/'>Coding</Link>
        </div>
        <div className="flex  flex-col items-center">
          <span className="font-bold textColor mb-1">Social</span>
          <Link href='/'>Facebook</Link>
          <Link href='/'>Instagram</Link>
          <Link href='/'>LinkedIn</Link>
          <Link href='/'>Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
