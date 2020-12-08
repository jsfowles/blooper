// ts-nocheck
import React from 'react';
import { useQuery } from '@apollo/client';

import { PageQuery } from '@graphql/PageQuery';
import TextBlock from '@components/TextBlock';
import Carousel from '@components/Carousel';

const BG = [
  'var(--primary-1)',
  'var(--primary)',
  'var(--primary-2)',
  'var(--primary-3)',
  'var(--primary-1)',
];

const Resources = () => {
  const { data } = useQuery(PageQuery, {
    variables: { id: '65KBLiuiKfO7h2sUZMF30u' },
  });

  if (!data) {
    return null;
  }
  const modifiersBlocks = data.page.pageContentCollection.items.map(
    (item: any, index: number) => ({
      ...item,
      index,
      background: BG[index % BG.length],
    }),
  );

  return (
    <>
      <TextBlock {...data.page.heroSection} />
      <Carousel cards={modifiersBlocks} noShadow />
    </>
  );
};

export default Resources;
