// @ts-nocheck
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

  const timeModifiers = data.page.pageContentCollection.items
    .slice(0, 3)
    .map((item: any, index: number) => ({
      ...item,
      index,
      title: 'time',
      background: BG[index % BG.length],
    }));

  const behaviorModifiers = data.page.pageContentCollection.items
    .slice(3, 6)
    .map((item: any, index: number) => ({
      ...item,
      index,
      title: 'behavior',
      background: BG[index % BG.length],
    }));

  const frequencyModifiers = data.page.pageContentCollection.items
    .slice(6, 9)
    .map((item: any, index: number) => ({
      ...item,
      index,
      title: 'frequency',
      background: BG[index % BG.length],
    }));

  const interactiveModifiers = data.page.pageContentCollection.items
    .slice(9, 12)
    .map((item: any, index: number) => ({
      ...item,
      index,
      title: 'interactive',
      background: BG[index % BG.length],
    }));

  return (
    <div>
      <TextBlock {...data.page.heroSection} />
      {isMobile ? (
        <div>
          <MobileCarousel cards={timeModifiers} />
          <MobileCarousel cards={behaviorModifiers} />
          <MobileCarousel cards={frequencyModifiers} />
          <MobileCarousel cards={interactiveModifiers} />
        </div>
      ) : (
        <div>
          <Carousel cards={timeModifiers} noShadow />
          <Carousel cards={behaviorModifiers} noShadow reverse />
          <Carousel cards={frequencyModifiers} noShadow />
          <Carousel cards={interactiveModifiers} noShadow reverse />
        </div>
      )}
    </div>
  );
};

export default Resources;
