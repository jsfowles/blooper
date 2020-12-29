// @ts-nocheck
import React from 'react';
import { Scribbles, Content } from './styles';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Block from '@components/Block';
import useOffset from '@hooks/useOffset';
import { useQuery } from '@apollo/client';
import { PageQuery } from '@graphql/PageQuery';

const BG = [
  'var(--primary-1)',
  'var(--primary)',
  'var(--primary-2)',
  'var(--primary-3)',
  'var(--primary-1)',
];

const Home = () => {
  const offset = useOffset();
  const { data } = useQuery(PageQuery, {
    variables: { id: '3hAiIlzVLEB6JMguCHydMu' },
  });

  if (!data) {
    return null;
  }

  const FAQsBlock = data.page.pageContentCollection.items.map(
    (item, index) => ({
      ...item,
      index,
      background: BG[index % BG.length],
    }),
  );

  return (
    <div>
      {FAQsBlock.map(({ heading, textSummary }) => (
        <div style={{ maxWidth: 1024, margin: '0 auto', padding: '20px 0' }}>
          <h4 style={{ fontSize: 32, maxWidth: '25ch' }}>{heading}</h4>
          <p style={{ fontSize: 18, maxWidth: '35ch' }}>{textSummary}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
