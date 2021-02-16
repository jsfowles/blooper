import * as React from 'react';
import { AppProps } from 'next/app';
import withApollo from 'next-with-apollo';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import '@animated-burgers/burger-squeeze/dist/styles.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'swiper/swiper-bundle.css';
import { createApolloClient } from '@lib/apollo';
import Layout from '@components/Layout';
import * as theme from '@identity/index';
import { mainMotion } from '@components/Layout/motion';
import { ApolloProvider } from '@apollo/client';

interface Props {
  pageProps: any;
  apollo: any;
}
const MyApp = ({ Component, pageProps, router, apollo }: AppProps & Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>The Blooper - CBA</title>
      </Head>

      <ApolloProvider client={apollo}>
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <motion.main {...mainMotion} key={router.route}>
              <Component {...pageProps} />
            </motion.main>
          </AnimatePresence>
        </Layout>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default withApollo(createApolloClient)(MyApp);
