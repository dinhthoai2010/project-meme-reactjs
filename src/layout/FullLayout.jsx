import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const FullLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default FullLayout;