// @ts-nocheck
import React from 'react';

import useOffset from '@hooks/useOffset';
import { useQuery } from '@apollo/client';
import { PageQuery } from '@graphql/PageQuery';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

const BG = [
  'var(--primary-1)',
  'var(--primary)',
  'var(--primary-2)',
  'var(--primary-3)',
  'var(--primary-1)',
];

const Home = () => {
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
      <h1
        className="filled-header"
        style={{
          fontSize: 48,
          margin: '32px auto',
        }}
      >
        FAQ's
      </h1>
      {FAQsBlock.map(({ heading, textSummary, background }) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '60px 7vw',
          }}
        >
          <h4
            style={{
              fontSize: 28,
              maxWidth: '23ch',
            }}
          >
            {heading}
          </h4>
          <p
            style={{
              fontSize: 18,
              maxWidth: '36ch',
              width: '100%',
              paddingTop: 24,
            }}
          >
            <ReactMarkdown plugins={[gfm]}>{textSummary}</ReactMarkdown>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Home;
