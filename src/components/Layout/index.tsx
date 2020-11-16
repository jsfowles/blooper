// @ts-nocheck
import React from 'react';
import { Header } from '@patterns/Navigation';
import Footer from '@patterns/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
