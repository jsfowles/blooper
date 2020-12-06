import React from 'react';
import { Scribbles, Content } from './styles';
import Image from '@components/Image';
import { motion } from 'framer-motion';
import { DATA_BLOCKS } from '@views/Home/data';
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
    variables: { id: '3ks1bL5TxZM1BAKjkCjAQi' },
  });

  if (!data) {
    return null;
  }

  const homeBlocks = data.page.pageContentCollection.items.map(
    (item, index) => ({
      ...item,
      index,
      background: BG[index % BG.length],
    }),
  );
  console.log(data.page.pageContentCollection, 'this');

  return (
    <div>
      <Scribbles>
        <Content>
          <Image src={data.page.heroSection.image.url} />
          <motion.h1>{data.page.heroSection.heading}</motion.h1>
          <div style={{ position: 'relative' }}>
            <motion.p>{data.page.heroSection.description}</motion.p>
            <Image
              src="/images/s1.png"
              className="s1"
              transition={{ type: 'spring', stiffness: 60 }}
              animate={{
                y: offset * 0.5,
                rotate: offset * 0.1,
              }}
            />
            <Image
              src="/images/s3.png"
              className="s3"
              transition={{ type: 'spring', stiffness: 60 }}
              animate={{
                y: -offset * 0.2,
                rotate: -offset * 0.3,
              }}
            />
          </div>
        </Content>
        <Image
          src="/images/s7.png"
          className="s7"
          transition={{ type: 'spring', stiffness: 60 }}
          animate={{
            y: -offset * 0.3,
            rotate: offset * 0.08,
          }}
        />
        <Image
          src="/images/s10.png"
          className="s10"
          transition={{ type: 'spring', stiffness: 60 }}
          animate={{
            y: offset * 0.3,
            rotate: -offset * 0.05,
          }}
        />
        <Image
          src="/images/s5.png"
          className="s5"
          transition={{ type: 'spring', stiffness: 60 }}
          animate={{
            y: offset * 0.9,
            rotate: -offset * 0.1,
          }}
        />
      </Scribbles>

      {homeBlocks.map(block => (
        <Block {...block} />
      ))}
    </div>
  );
};

export default Home;
