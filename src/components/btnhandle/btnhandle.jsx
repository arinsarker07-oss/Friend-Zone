"use client"
import React, { useContext } from 'react';
import { FiMessageSquare, FiPhone, FiVideo } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { ContactContext } from '../contactProvider/contacrprovider';


const TogoleButton = ({ person }) => {
    const { installContact, setInstallContact } = useContext(ContactContext)
    console.log(installContact);

const CallButtonClick = (Message) => {
    const historyEntry = { ...person, actionType: 'Call', date: new Date().toLocaleDateString() };
    setInstallContact([...installContact, historyEntry]);
    toast.success(Message, { position: "top-center",theme: "colored", icon: <FiPhone></FiPhone>  });
};
const TextButtonClick = (Message) => {
    const historyEntry = { ...person, actionType: 'Text', date: new Date().toLocaleDateString() };
    setInstallContact([...installContact, historyEntry]);
    toast.info(Message, { position: "top-center",theme: "colored", icon: <FiMessageSquare></FiMessageSquare> });
};
const VideoButtonClick = (Message) => {
    const historyEntry = { ...person, actionType: 'Video', date: new Date().toLocaleDateString() };
    setInstallContact([...installContact, historyEntry]);
    toast.warning(Message, { position: "top-center", icon:<FiVideo></FiVideo> ,theme: "colored"  });
};

    return (
        <>
            <button onClick={() => CallButtonClick(`Calling...${person.name}`)} className="flex flex-col items-center justify-center p-5 bg-gray-50 rounded-xl hover:bg-blue-50 transition group">
                <FiPhone className="text-2xl text-gray-700 group-hover:text-blue-600 mb-2" />
                <span className="text-[10px] font-bold uppercase text-gray-500">Call</span>
            </button>
            <button onClick={() => TextButtonClick(`Sending Message...to..${person.name}`)} className="flex flex-col items-center justify-center p-5 bg-gray-50 rounded-xl hover:bg-blue-50 transition group">
                <FiMessageSquare className="text-2xl text-gray-700 group-hover:text-blue-600 mb-2" />
                <span className="text-[10px] font-bold uppercase text-gray-500">Text</span>
            </button>
            <button onClick={() => VideoButtonClick(`Starting Video Call...with.. ${person.name}`)} className="flex flex-col items-center justify-center p-5 bg-gray-50 rounded-xl hover:bg-blue-50 transition group">
                <FiVideo className="text-2xl text-gray-700 group-hover:text-blue-600 mb-2" />
                <span className="text-[10px] font-bold uppercase text-gray-500">Video</span>
            </button>
        </>


    );
};

export default TogoleButton;