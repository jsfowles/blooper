// @ts-nocheck
import React from 'react';
import { Container, Row } from '@identity/grid';
import Link from 'next/link';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Image from '../src/components/Image/index';
import Element from '../src/components/Element/index';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import TroopCarousel from '@components/TroopCarousel';
const IMAGES = [
  '/images/s2.png',
  '/images/s3.png',
  '/images/s5.png',
  '/images/s1.png',
  '/images/s6.png',
  '/images/s7.png',
  '/images/s8.png',
  '/images/s4.png',
  '/images/s9.png',
  '/images/s10.png',
  '/images/s2.png',
  '/images/s3.png',
  '/images/s7.png',
  '/images/s1.png',
  '/images/s4.png',
  '/images/s5.png',
  '/images/s6.png',
  '/images/s8.png',
  '/images/s9.png',
  '/images/s3.png',
  '/images/s10.png',
  '/images/s1.png',
  '/images/s2.png',
  '/images/s8.png',
  '/images/s4.png',
  '/images/s5.png',
  '/images/s10.png',
  '/images/s6.png',
  '/images/s7.png',
  '/images/s9.png',
];

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 10%;
  align-items: center;
  position: absolute;
  width: 100%;
  z-index: 10;

  img {
    //top: 20%;
    bottom: 0;
    object-fit: contain;
    width: 150%;

    ${props => props.theme.breakpoints.TABLET} {
      width: 90vh;
    }
  }
`;

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const Home = () => {
  const shuffledArray = shuffle(IMAGES);

  return (
    <>
      <Wrapper>
        <motion.img
          initial={{ opacity: 0, y: 80 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.5,
            },
          }}
          exit={{ opacity: 0 }}
          src="/images/blooper-front.png"
        />
        <TroopCarousel />
      </Wrapper>

      <div style={{ overflow: 'hidden' }}>
        {shuffledArray.map((src, i) => {
          const even = i % 2 === 0;
          const props = {
            x: [
              even
                ? `${Math.random() * (100 - 0) + 0}%`
                : `${-Math.random() * (100 - 0) + 0}%`,
              even
                ? `${-Math.random() * (100 - 0) + 0}%`
                : `${Math.random() * (100 - 0) + 0}%`,
            ],
            y: [
              even
                ? `${Math.random() * (100 - 0) + 0}%`
                : `${-Math.random() * (100 - 0) + 0}%`,
              even
                ? `${-Math.random() * (100 - 0) + 0}%`
                : `${Math.random() * (100 - 0) + 0}%`,
            ],
          };

          return (
            <Parallax key={i} {...props}>
              <Image src={src} />
            </Parallax>
          );
        })}
      </div>
    </>
  );
};

export default Home;
