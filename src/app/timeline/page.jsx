"use client"
import React, { useContext, useState } from 'react';
import { FiPhone, FiMessageSquare, FiVideo } from 'react-icons/fi';
import { ContactContext } from '@/components/contactProvider/contacrprovider';

const Timeline = () => {
    const { installContact } = useContext(ContactContext);
    const [filter, setFilter] = useState('All');

    // Icon select korar logic
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
                {installContact
                    .filter(item => filter === 'All' || item.actionType === filter)
                    .map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                        <div className="bg-blue-50 p-3 rounded-lg">
                            {getActionIcon(item.actionType)}
                        </div>
                        <div className="flex-grow">
                            <h3 className="font-semibold text-slate-800">
                                <span className="font-bold">{item.actionType}</span> with {item.name}
                            </h3>
                            <p className="text-xs text-gray-400 mt-1">{item.date || 'Apr 17, 2026'}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;