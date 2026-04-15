import Link from 'next/link';
import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoHomeOutline, IoTimeOutline } from 'react-icons/io5';

const Navbar = () => {
    return (
        <>
            {/* navbar */}
            <div className="flex justify-between container mx-auto navbar bg-base-100 shadow-sm">
                <a className=" text-2xl font-bold"><span className='text-[#1F2937]'>Keen</span><span className='text-[#244D3F]'>Keeper</span></a>
                <div className=''>
                    <Link href={"/"} className='btn  bg-[#244D3F] text-white'><IoHomeOutline />Home</Link>
                    <Link href={"/"} className='btn  bg-[#244D3F] text-white'><IoTimeOutline /> Timeline</Link>
                    <Link href={"/"} className='btn  bg-[#244D3F] text-white'><ImStatsDots /> Stats</Link>
                </div>

            </div>

        </>

    );
};

export default Navbar;