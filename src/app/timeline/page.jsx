"use client"
import React, { useContext, useState } from 'react';
import { FiPhone, FiMessageSquare, FiVideo } from 'react-icons/fi';
import { ContactContext } from '@/components/contactProvider/contacrprovider';

import { useEffect } from "react";
import Link from 'next/link';



const Timeline = () => {
    const { installContact } = useContext(ContactContext);
    const [filter, setFilter] = useState('All');

    const [currentTime, setCurrentTime] = useState("");
    useEffect(() => {
        const now = new Date();
        const dateString = now.toLocaleDateString();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        setCurrentTime(`${dateString} | ${timeString}`);
    }, []);

    const getActionIcon = (type) => {
        switch (type) {
            case 'Call': return <FiPhone className="text-blue-500 text-2xl" />;
            case 'Text': return <FiMessageSquare className="text-blue-400 text-2xl" />;
            case 'Video': return <FiVideo className="text-indigo-500 text-2xl" />;
            default: return null;
        }
    };

    return (
        <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-bold text-slate-800 mb-6 text-start">Timeline</h1>

            {/* Filter Buttons & Search */}
            <div className="flex md:flex-row flex-col-reverse gap-4 justify-between items-center mb-8">
                <div className="flex  bg-gray-200 p-1 rounded-full px-4 gap-4">
                    {['All', 'Call', 'Text', 'Video'].map((item) => (
                        <button
                            key={item}
                            onClick={() => setFilter(item)}
                            className={`px-4 py-1 rounded-full text-sm font-medium ${filter === item ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <input
                    type="text"
                    placeholder="Search by name..."
                    className="border border-gray-300 rounded-full px-4 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Timeline List */}
            <div className="space-y-4">
                {installContact && installContact.length > 0 ? (
                    installContact.filter(item => filter === 'All' || item.actionType === filter)
                        .map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                                <div className="bg-blue-50 p-3 rounded-lg">
                                    {getActionIcon(item.actionType)}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-semibold text-slate-800">
                                        <span className="font-bold">{item.actionType}</span> with {item.name}
                                    </h3>
                                    <p className="text-xs text-gray-400 mt-1">{currentTime || "Loading..."} </p>
                                </div>
                            </div>
                        ))) :
                    (
                        <div className='mx-auto container h-100 gap-6 flex flex-col items-center justify-center border-5 rounded-2xl border-dotted border-green-800'>
                            <p className=' text-2xl md:text-6xl font-extrabold '>No contacts found.</p>
                            <Link href={"/"} className='btn btn-success md:text-3xl font-bold btn-outline'> GO HOME</Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Timeline;