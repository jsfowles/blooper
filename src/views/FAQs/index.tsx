// @ts-nocheck
import React from 'react';

import { useQuery } from '@apollo/client';
import { PageQuery } from '@graphql/PageQuery';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import TextBlock from '@components/TextBlock';
import styled from 'styled-components';

const BG = [
  'var(--primary-1)',
  'var(--primary)',
  'var(--primary-2)',
  'var(--primary-3)',
  'var(--primary-1)',
];

const MD = styled.div`
  p {
    padding-bottom: 1em;
    line-height: 140%;
    text-align: left;
    strong {
      font-weight: bold;
    }
  }
`;

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
      <TextBlock {...data.page.heroSection} />
      {FAQsBlock.map(({ heading, textSummary, background }) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0 40px',
            paddingBottom: '40px',
            maxWidth: 1024,
            margin: '0 auto',
          }}
        >
          <h4
            style={{
              fontSize: 28,
            }}
          >
            {heading}
          </h4>
          <MD
            style={{
              textAlign: 'left',
              fontSize: 18,
              width: '100%',
              paddingTop: 10,
            }}
          >
            <ReactMarkdown plugins={[gfm]}>{textSummary}</ReactMarkdown>
          </MD>
        </div>
      ))}
    </div>
  );
};

export default Home;
