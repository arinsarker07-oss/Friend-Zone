"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const TogleNav = ({children,href}) => {
    const pathname= usePathname()
    return (
            <Link className={` btn  ${pathname===href ?'bg-[#244D3F] text-white ':''}`} href={href}>
              {children}
            </Link>
     
    );
};

export default TogleNav;