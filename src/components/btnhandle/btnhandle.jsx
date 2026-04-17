"use client"
import React from 'react';
import { FiMessageSquare, FiPhone, FiVideo } from 'react-icons/fi';

const handleButtonClick = () => {
    console.log("btn click");
}
const TogoleButton = () => {
    return (
        <>
            <button onClick={() => handleButtonClick()} className="flex flex-col items-center justify-center p-5 bg-gray-50 rounded-xl hover:bg-blue-50 transition group">
                <FiPhone className="text-2xl text-gray-700 group-hover:text-blue-600 mb-2" />
                <span className="text-[10px] font-bold uppercase text-gray-500">Call</span>
            </button>
            <button onClick={() => handleButtonClick()} className="flex flex-col items-center justify-center p-5 bg-gray-50 rounded-xl hover:bg-blue-50 transition group">
                <FiMessageSquare className="text-2xl text-gray-700 group-hover:text-blue-600 mb-2" />
                <span className="text-[10px] font-bold uppercase text-gray-500">Text</span>
            </button>
            <button onClick={() => handleButtonClick()} className="flex flex-col items-center justify-center p-5 bg-gray-50 rounded-xl hover:bg-blue-50 transition group">
                <FiVideo className="text-2xl text-gray-700 group-hover:text-blue-600 mb-2" />
                <span className="text-[10px] font-bold uppercase text-gray-500">Video</span>
            </button>
        </>


    );
};

export default TogoleButton;