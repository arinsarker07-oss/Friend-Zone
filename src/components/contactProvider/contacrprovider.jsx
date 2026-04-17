"use client";
import { createContext, useState } from "react";
export const ContactContext = createContext();
const ContractProvider = ({ children }) => {
    const [installContact, setInstallContact] = useState([]);
    const data = {
        installContact,
        setInstallContact,
    };
    return (
        <ContactContext.Provider value={data}>
            {children}
        </ContactContext.Provider>
    );
};
export default ContractProvider;