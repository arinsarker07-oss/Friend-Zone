import React from 'react';
import { HiOutlineVideoCamera, HiOutlineChatAlt2, HiOutlinePhone } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';

const appsPromise = async () => {
    const res = await fetch("http://localhost:3000/card.json");
    const data = await res.json();
    return data;
};

const Timeline = async () => {
    const users = await appsPromise();
    const getStatusStyles = (status) => {
        const baseIconClass = "p-2 rounded-lg text-xl";
        switch (status) {
            case 'On_Track': 
                return { 
                    icon: <div className={`${baseIconClass} bg-green-50 text-green-500`}><HiOutlineVideoCamera /></div>, 
                    color: 'text-emerald-600' 
                };
            case 'almost_due': 
                return { 
                    icon: <div className={`${baseIconClass} bg-purple-50 text-purple-500`}><HiOutlineChatAlt2 /></div>, 
                    color: 'text-purple-600' 
                };
            case 'overdue': 
                return { 
                    icon: <div className={`${baseIconClass} bg-red-50 text-red-500`}><HiOutlinePhone /></div>, 
                    color: 'text-red-600' 
                };
        }
    };

    return (
        <div className="container mx-auto p-8 bg-white min-h-screen font-sans">
            {/* Title Section */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-slate-900">Timeline</h1>
                <p className="text-gray-500 text-sm mt-1">A full history of your interactions across all friends.</p>
            </div>

            {/* Top Bar: Search and Filter */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Filter by:</span>
                    <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm">
                        <option>All</option>
                        <option>On Track</option>
                        <option>Almost Due</option>
                        <option>Overdue</option>
                    </select>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Search timeline..." 
                            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-64 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Sort by:</span>
                        <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm">
                            <option>Default</option>
                            <option>Newest</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Timeline Dynamic List */}
            <div className="space-y-4">
                {users.map((user) => {
                    const { icon, color } = getStatusStyles(user.status);
                    
                    return (
                        <div 
                            key={user.id} 
                            className="flex items-center justify-between p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all group"
                        >
                            <div className="flex items-center gap-4">
                                {/* Dynamic Icon from React Icons */}
                                {icon}
                                
                                <div>
                                    <p className="text-base font-semibold text-slate-800">
                                        <span className={color}>{user.status.replace('_', ' ')}</span>
                                        <span className="text-gray-400 font-normal ml-1">with {user.name}</span>
                                    </p>
                                    <p className="text-sm text-gray-500 mt-0.5">{user.bio.substring(0, 60)}...</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-end gap-2">
                                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                                    {user.next_due_date}
                                </p>
                                {/* Message button on hover */}
                                <button className="opacity-0 group-hover:opacity-100 bg-slate-900 text-white text-[10px] px-3 py-1.5 rounded-md transition-all">
                                    Message
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Timeline;