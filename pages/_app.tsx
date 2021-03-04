import * as React from 'react';
import { AppProps } from 'next/app';
import withApollo from 'next-with-apollo';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { ThemeProvider } from 'styled-components';
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

const Main = styled(motion.main)`
  margin-top: 80px;
  ${props => props.theme.breakpoints.TABLET} {
    margin-top: 0px;
  }
`;

const MyApp = ({ Component, pageProps, router, apollo }: AppProps & Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Blooper - CBA</title>
      </Head>

      <ApolloProvider client={apollo}>
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <Main {...mainMotion} key={router.route}>
              <Component {...pageProps} />
            </Main>
          </AnimatePresence>
        </Layout>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default withApollo(createApolloClient)(MyApp);
