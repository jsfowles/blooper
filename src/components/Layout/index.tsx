// @ts-nocheck
import React from 'react';
import { Header } from '@patterns/Navigation';
import Footer from '@patterns/Footer';
import Head from 'next/head';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head title="blooper"></Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
