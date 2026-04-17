import ContractProvider from '@/components/contactProvider/contacrprovider';
import React from 'react';

const Provider = ({children}) => {
    return (
      <ContractProvider>
        {children}
      </ContractProvider>
    );
};

export default Provider;