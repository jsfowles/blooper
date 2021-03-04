// @ts-nocheck
import React from 'react';
import { Scribbles, Content } from './styles';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Block from '@components/Block';
import useOffset from '@hooks/useOffset';
import { useQuery } from '@apollo/client';
import { PageQuery } from '@graphql/PageQuery';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';

const BG = [
  'var(--primary-1)',
  'var(--primary)',
  'var(--primary-2)',
  'var(--primary-3)',
  'var(--primary-1)',
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -140 },
  show: { opacity: 1, y: 0 },
};

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

  return (
    <div>
      <Scribbles>
        <Content>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
              y: -400,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { when: 'afterChildren', delay: 0, duration: 1 },
            }}
          >
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={100}
              interval={5000}
              isPlaying
              totalSlides={2}
            >
              <Slider>
                <Slide
                  index={0}
                  classNameHidden="hidden"
                  classNameVisible="visible"
                >
                  <Image
                    className="bloop-img"
                    layout="responsive"
                    width={data.page.heroSection.image.width}
                    height={data.page.heroSection.image.height}
                    src={data.page.heroSection.image.url}
                    alt="blooper"
                  />
                </Slide>
                <Slide
                  index={1}
                  classNameHidden="hidden"
                  classNameVisible="visible"
                >
                  <Image
                    className="bloop-img"
                    layout="responsive"
                    width={data.page.heroSection.image.width}
                    height={data.page.heroSection.image.height}
                    src="/images/blooper-switches.png"
                    alt="blooper"
                    style={{ paddingBottom: 120 }}
                  />
                </Slide>
              </Slider>
            </CarouselProvider>
          </motion.div>
          <motion.h1
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { when: 'afterChildren', delay: 1, duration: 1 },
            }}
          >
            {data.page.heroSection.heading}
          </motion.h1>
          <motion.div
            style={{ position: 'relative' }}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { when: 'afterChildren', delay: 1, duration: 1 },
            }}
          >
            <motion.p>{data.page.heroSection.description}</motion.p>
            <motion.img
              src="/images/s1.png"
              className="s1"
              transition={{ type: 'spring', stiffness: 60 }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: offset * 0.5,
                rotate: offset * 0.1,
              }}
            />
            <motion.img
              src="/images/s3.png"
              className="s3"
              transition={{ type: 'spring', stiffness: 60 }}
              animate={{
                y: -offset * 0.2,
                rotate: -offset * 0.3,
              }}
            />
          </motion.div>
        </Content>
        <motion.div initial="hidden" animate="show" variants={container}>
          <motion.img
            src="/images/s7.png"
            className="s7"
            transition={{ type: 'spring', stiffness: 60 }}
            variants={item}
            animate={{
              y: -offset * 0.3,
              rotate: offset * 0.08,
            }}
          />
          <motion.img
            src="/images/s10.png"
            className="s10"
            transition={{ type: 'spring', stiffness: 60 }}
            variants={item}
            animate={{
              y: offset * 0.3,
              rotate: -offset * 0.05,
            }}
          />
          <motion.img
            src="/images/s5.png"
            className="s5"
            transition={{ type: 'spring', stiffness: 60 }}
            variants={item}
            animate={{
              y: offset * 0.9,
              rotate: -offset * 0.1,
            }}
          />
        </motion.div>
      </Scribbles>

      {homeBlocks.map(block => (
        <Block {...block} />
      ))}
    </div>
  );
};

export default Home;
