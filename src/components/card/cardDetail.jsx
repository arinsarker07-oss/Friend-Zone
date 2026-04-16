import Image from 'next/image';
import React from 'react';

import { FiBell, FiArchive, FiTrash2, FiPhone, FiMessageSquare, FiVideo
} from 'react-icons/fi';
const statusColors = {

    active: "badge-success",
    almost_due: "badge-warning",
    overdue: "badge-error"
};


const CardDetail = async () => {

    const res = await fetch("http://localhost:3000//card.json");
    const persondata = await res.json();
    console.log(persondata);
    return (
        <div>
            {persondata.map((person) => { return (
                    <div key={person.id} className="max-w-5xl mx-auto p-6  rounded-2xl ">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="w-full md:w-1/3 bg-white rounded-xl border border-gray-100 shadow-sm p-8 flex flex-col items-center text-center">
                                <div className="relative">
                                  <Image
                                         src={person.picture}
                                        alt={person.name}
                                        width={90}
                                        height={90}
                                        className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-gray-100"
                                  />
                                </div>
                                <h2 className="text-xl font-bold text-gray-800 mb-1">{person.name}</h2>
                                <span className={`text-[10px] uppercase font-bold  mb-2 badge badge-sm ${statusColors[person.status]}`}>
                                    {person.status}
                                </span>
                                <div className="flex gap-2 mb-4">
                                    {person.tags.map((tag) => (
                                        <span key={tag} className="badge badge-primary badge-soft text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-500 text-sm italic mb-1 px-4 leading-relaxed">
                                    "{person.bio}"
                                </p>
                                <p className="text-[#64748B] text-[13px] font-bold">
                                    Preferred: {person.email}
                                </p>

                                {/* Side Actions */}
                                <div className="w-full mt-8 space-y-2">
                                    <button className="w-full flex items-center justify-center gap-2 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition">
                                        <FiBell /> Snooze 2 Weeks
                                    </button>
                                    <button className="w-full flex items-center justify-center gap-2 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition">
                                        <FiArchive /> Archive
                                    </button>
                                    <button className="w-full flex items-center justify-center gap-2 py-2 bg-white border border-gray-200 rounded-lg text-sm text-red-500 hover:bg-red-50 transition">
                                        <FiTrash2 /> Delete
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 space-y-10">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                                        <div className="text-4xl font-semibold text-[#244D3F]">{person.days_since_contact}</div>
                                        <div className=" text-[#64748B] mt-1">Days Since Contact</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                                        <div className="text-4xl font-semibold text-[#244D3F]">{person.goal}</div>
                                        <div className=" text-[#64748B] mt-1">Goal (Days)</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                                        <div className="text-4xl font-semibold text-[#244D3F]">
                                            {new Date(person.next_due_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </div>
                                        <div className=" text-[#64748B] mt-1">Next Due</div>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-[#244D3F] mb-2">Relationship Goal</h3>
                                        <p className="text-gray-500 text-sm">Connect every <span className="font-bold text-gray-700">{person.goal} days</span></p>
                                    </div>
                                    <button className="flex items-center gap-1 px-4 py-1.5 bg-gray-50 border border-gray-200 rounded text-xs font-bold text-gray-600 hover:bg-gray-100 transition">
                                        Edit
                                    </button>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="font-bold text-[#244D3F] mb-8">Quick Check-In</h3>
                                    <div className="grid grid-cols-3 gap-4">
                                        <button className="flex flex-col items-center justify-center p-5 bg-gray-50 rounded-xl hover:bg-blue-50 transition group">
                                            <FiPhone className="text-2xl text-gray-700 group-hover:text-blue-600 mb-2" />
                                            <span className="text-[10px] font-bold uppercase text-gray-500">Call</span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center p-5 bg-gray-50 rounded-xl hover:bg-blue-50 transition group">
                                            <FiMessageSquare className="text-2xl text-gray-700 group-hover:text-blue-600 mb-2" />
                                            <span className="text-[10px] font-bold uppercase text-gray-500">Text</span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center p-5 bg-gray-50 rounded-xl hover:bg-blue-50 transition group">
                                            <FiVideo className="text-2xl text-gray-700 group-hover:text-blue-600 mb-2" />
                                            <span className="text-[10px] font-bold uppercase text-gray-500">Video</span>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
          
            )})}
        </div>
            )
};

export default CardDetail;