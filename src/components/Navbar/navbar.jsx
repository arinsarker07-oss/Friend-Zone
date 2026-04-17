import Link from 'next/link';
import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoHomeOutline, IoTimeOutline } from 'react-icons/io5';
import TogleNav from './togle';

const Navbar = () => {
    const navItem=[
         {
      path: "/",
      icon: <IoHomeOutline />,
      text: "Home",
    },
    {
      path: "/timeline",
      icon:<IoTimeOutline />,
      text: "Timeline",
    },
    {
      path: "/stats",
      icon:<ImStatsDots /> ,
      text: "Stats",
    },
    ]
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between container mx-auto navbar bg-base-100 shadow-sm">
                <a className=" text-2xl font-bold"><span className='text-[#1F2937]'>Keen</span><span className='text-[#244D3F]'>Keeper</span></a>
                <div className=''>
                    {
                        navItem.map((item)=> 
                        <TogleNav key={item.path} href={item.path}>
                           {item.icon}{item.text}
                        </TogleNav>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;