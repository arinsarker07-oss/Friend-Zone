import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const statusColors = {

    active: "badge-success",
    almost_due: "badge-warning",
    overdue: "badge-error"
};
const AllCard = ({ friend }) => {
    return (
        <Link href={`/${friend.id}`}>
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
                            <span key={index} className="badge badge-success  badge-soft badge-sm uppercase text-[11px]   text-[#244D3F]">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <span className={`text-[10px] uppercase font-bold  mb-2 badge badge-sm ${statusColors[friend.status]}`}>
                        {friend.status}
                    </span>
                </div>
            </div>
        </Link>

    );
};

export default AllCard;