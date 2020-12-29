// ts-nocheck
import React from 'react';
import { useQuery } from '@apollo/client';

import { PageQuery } from '@graphql/PageQuery';
import TextBlock from '@components/TextBlock';
import MobileCarousel from '@components/MobileCarousel';
import { useMediaQuery } from 'react-responsive';
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

  const isMobile = useMediaQuery({
    query: '(max-device-width: 1024px)',
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
      {isMobile ? (
        <>
          <MobileCarousel cards={modifiersBlocks1} noShadow />
          <MobileCarousel cards={modifiersBlocks2} noShadow />
          <MobileCarousel cards={modifiersBlocks3} noShadow />
        </>
      ) : (
        <>
          <Carousel cards={modifiersBlocks1} noShadow />
          <Carousel cards={modifiersBlocks2} noShadow reverse />
          <Carousel cards={modifiersBlocks3} noShadow />
        </>
      )}
    </>
  );
};

export default Resources;
