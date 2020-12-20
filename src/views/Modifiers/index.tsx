// ts-nocheck
import React from 'react';
import { useQuery } from '@apollo/client';

import { PageQuery } from '@graphql/PageQuery';
import TextBlock from '@components/TextBlock';
import MobileCarousel from '@components/MobileCarousel';

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
  const modifiersBlocks1 = data.page.pageContentCollection.items
    .slice(0, 4)
    .map((item: any, index: number) => ({
      ...item,
      index,
      background: BG[index % BG.length],
    }));

  const modifiersBlocks2 = data.page.pageContentCollection.items
    .slice(4, 8)
    .map((item: any, index: number) => ({
      ...item,
      index,
      background: BG[index % BG.length],
    }));

  const modifiersBlocks3 = data.page.pageContentCollection.items
    .slice(8, 12)
    .map((item: any, index: number) => ({
      ...item,
      index,
      background: BG[index % BG.length],
    }));

  return (
    <>
      <TextBlock {...data.page.heroSection} />
      <MobileCarousel cards={modifiersBlocks1} noShadow />
    </>
  );
};

export default Resources;
