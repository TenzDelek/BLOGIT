'use client'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const path=usePathname();
  const navitems = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/posts",
      label: "Posts",
    },
    {
      href: "/create-post",
      label: "Create",
    },
  ];
  return (
    <header className=" flex px-7 py-4 border-b justify-between items-center">
      <Link href="/">
      <Image
        src="/logoreal.png"
        alt="logo"
        className=" w-[35px] h-[35px]"
        height={35}
        width={35}
      />
      </Link>
      {/* the reason why we are writing two w and h is to tell browser(keep space) as html is load first then css */}

      <nav>
        <ul className=" flex gap-x-5 text-sm  font-semibold">
        <SignedIn>
          <div className=" items-center flex gap-3">
          {navitems.map((item, index) => (
            <li key={index}>
                <Link href={item.href} className={`${path===item.href?"text-zinc-900 ":"text-zinc-400 "}`}>
                {item.label}
                </Link></li>
          ))}
          <UserButton/>
          </div>
          </SignedIn>
          <SignedOut> 
            <SignInButton/>
        </SignedOut>
        </ul>
       
      </nav>
    </header>
  );
};

export default Header;
