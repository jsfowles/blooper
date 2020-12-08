// @ts-nocheck
import React from 'react';
import { Header } from '@patterns/Navigation';
import Footer from '@patterns/Footer';
import Head from 'next/head';

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  const [toggleLayout, setToggleLayout] = React.useState(false);

  return (
    <>
      <Head title="blooper">
        {toggleLayout && (
          <style
            dangerouslySetInnerHTML={{
              __html: `
          html * {
                  box-shadow: 0 0 0 1px hotpink;
          }
        `,
            }}
          />
        )}
      </Head>
      <Header />
      {children}
      <Footer />
      <button
        onClick={() => setToggleLayout(!toggleLayout)}
        style={{
          height: 25,
          width: 25,
          position: 'fixed',
          zIndex: 1000,
          top: 0,
          right: 0,
          background: 'none',
          border: 'none',
          outline: 'none',
        }}
      />
    </>
  );
};

export default Layout;
