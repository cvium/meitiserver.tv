import React from 'react';
import Footer from './Footer';
import Header from './Header';

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-thatch-100">
      <Header />
        {children}
      <Footer />
    </div>
  );
};

export const LandingPage = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-thatch-100">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export const ErrorPage = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gondola-900">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
