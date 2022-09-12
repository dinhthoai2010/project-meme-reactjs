import React from 'react';
import Header from '../components/Header';

const IsHeader = ({children}) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default IsHeader;