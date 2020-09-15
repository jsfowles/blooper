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

export const H1 = styled.h1`
  font-size: 14vw;

  background: linear-gradient(
    to right,
    var(--primary),
    var(--primary-light),
    var(--primary-dark)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: center;
  padding-bottom: 10%;
  align-items: center;
  z-index: 10;
`;

const Home = () => {
  console.log(Math.random() * (100 - 0) + 0);
  return (
    <>
      <H1>blooper</H1>
      <Container scrollAxis="vertical">
        <div>
          {IMAGES.map((src, i) => {
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
      </Container>
    </>
  );
};

export default Home;
