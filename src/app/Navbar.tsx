
'use client';

import React from "react";
import Link from "next/link";
import { IoBugSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import classNames from "classnames";
//  classnamei is used for more cleaner verison if true or not 


  
const Navbar = () => {


    //  get current path :
const currentPath = usePathname();


       
  const links = [
    //  mappig the link dyanamically

    //You’re defining your menu items in one place.

    // Each item has a label (the visible text) and an href (the URL it links to).
    { label: "Dashboard", href: "/" },
    { label: "Issue", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <IoBugSharp />
      </Link>
      <ul className="flex space-x-6">
        {/*  for that we will map it with a key and then take the properties dyanamically   */}
        {links.map((link) => (
          <Link
            key={link.href}
            // className={`${link.href=== currentPath? "text-zince-900" :" text-zinc-500 hover:text-zinc-800 transition-colors"}`}
            
            //  Instead of template string we can use classname
            className={classNames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                'hover:text-zinc-800 transition-colors':true , //coz we wanna render this all time soo true 

            }

            )}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
