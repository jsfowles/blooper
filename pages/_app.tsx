import * as React from 'react';
import App from 'next/app';
import withApollo from 'next-with-apollo';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import '@animated-burgers/burger-squeeze/dist/styles.css';

import { createApolloClient } from '@lib/apollo';
import Layout from '@components/Layout';
import * as theme from '@identity/index';

import { mainMotion } from '@components/Layout/motion';
import { ApolloProvider } from '@apollo/client';

const MyApp = ({ Component, pageProps, router, apollo }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>The Blooper</title>
        <link rel="shortcut icon" type="image/x-icon" />
      </Head>

      <ApolloProvider client={apollo}>
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <motion.main {...mainMotion} key={router.route}>
              <Component {...pageProps} key={router.route} />
            </motion.main>
          </AnimatePresence>
        </Layout>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default withApollo(createApolloClient)(MyApp);
