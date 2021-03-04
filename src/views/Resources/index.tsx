// @ts-nocheck
import React from 'react';
import { useQuery } from '@apollo/client';

import { PageQuery } from '@graphql/PageQuery';
import TextBlock from '@components/TextBlock';
import Carousel from '@components/Carousel';
import MobileResources from '@components/MobileResources';
import { useMediaQuery } from 'react-responsive';
import MobileCarousel from '@components/MobileCarousel';

const BG = [
  'var(--primary-1)',
  'var(--primary)',
  'var(--primary-2)',
  'var(--primary-3)',
  'var(--primary-1)',
];

const Resources = () => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 1024px)',
  });
  const { data } = useQuery(PageQuery, {
    variables: { id: '5yHQKfznN9ePFS00EII6Im' },
  });

  if (!data) {
    return null;
  }

  const resourceBlocks = data.page.pageContentCollection.items.map(
    (item: any, index: number) => ({
      ...item,
      index,
      background: BG[index % BG.length],
    }),
  );

  return (
    <>
      <TextBlock {...data.page.heroSection} />
      {isMobile ? (
        <MobileResources cards={resourceBlocks} />
      ) : (
        <Carousel cards={resourceBlocks} />
      )}
    </>
  );
};

export default Resources;
