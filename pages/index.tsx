// @ts-nocheck
import React from 'react';
import { Container, Row } from '@identity/grid';

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Image from '../src/components/Image/index';
import Element from '../src/components/Element/index';
import styled from 'styled-components';
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
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding-bottom: 10%;
  align-items: center;
  position: absolute;
  cursor: url('/images/s9.png');

  h1 {
    background: linear-gradient(
      to right,
      var(--blue-dark) 0%,
      var(--green) 50%,
      var(--blue) 50%
    );
    line-height: initial;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 14vw;
    text-align: center;
    width: 100%;
    position: fixed;
    right: 0;
    left: 0;
    z-index: 10;
    overflow: hidden;
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
        <h1>blooper</h1>
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
