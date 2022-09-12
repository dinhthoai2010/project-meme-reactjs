import React from 'react';
import Footer from '../components/Footer';

const IsFooter = ({children}) => {
    return (
        <>
            {children}
            <Footer />
        </>
    );
};

export default IsFooter;