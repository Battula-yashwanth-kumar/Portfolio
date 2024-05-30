"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import {  ReactNode } from "react";

interface linkprops{
    href:string;
    exact?:boolean;
    children?:ReactNode;
    className:string;
}

const NavLink=({href,exact=false,className='',children}:linkprops)=>{
    const pathname =usePathname();
    const isActive=exact?pathname===href:pathname.startsWith(href);
    const classname =isActive?`${className} active`:className;
    return(
        <Link href={href} className={className}>{children}</Link>
    )
}
export default NavLink;