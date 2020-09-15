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
      {/* <Header /> */}
      <ParallaxProvider>{children}</ParallaxProvider>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
