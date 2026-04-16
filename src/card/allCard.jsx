import Image from 'next/image';
import React from 'react';

const AllCard = ({ friend }) => {
    console.log(friend);

    return (
        <div className="card bg-white shadow-xl border border-gray-100 p-8 flex flex-col items-center text-center transition-all hover:shadow-2xl">
            <div className="avatar mb-6">
                <div className="w-24 h-24 rounded-full ring ring-[#264d3e] ring-offset-base-100 ring-offset-2">
                    <Image
                        src={friend.picture}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>
            </div>
            <h2 className="text-xl font-extrabold text-[#1e293b]">{friend.name}</h2>
            <p className="text-sm text-gray-400 font-medium mb-4">{friend.days_since_contact}d ago</p>
            <div className="flex flex-col gap-3 items-center w-full mt-auto">
                <div className="flex flex-wrap justify-center gap-1">
                    {friend.tags.map((tag, index) => (
                        <span key={index} className="badge badge-outline badge-sm uppercase text-[9px] font-bold py-2 px-3 border-gray-200 text-gray-500">
                            {tag}
                        </span>
                    ))}
                </div>
                <span className={`badge badge-md py-4 px-6 font-bold text-xs border-none rounded-full shadow-sm `}>
                    {friend.status}
                </span>

            </div>
        </div>
    );
};

export default AllCard;