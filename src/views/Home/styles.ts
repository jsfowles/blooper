import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Content = styled(motion.div)`
  position: relative;
  padding: 0 7vw;
  padding-bottom: 20%;

  img {
    object-fit: contain;
    max-width: 100%;
  }

  h1 {
    text-align: center;
    font-size: 80px;

    ${props => props.theme.breakpoints.TABLET} {
      font-size: 124px;
    }
  }

  p {
    padding-top: 24px;
    font-size: 18px;
    max-width: 56ch;

    ${props => props.theme.breakpoints.TABLET} {
      text-align: center;
      padding-top: 48px;
      font-size: 21px;
    }
  }

  .s1 {
    position: absolute;
    width: 120px;
    top: 0;
    z-index: -1;
    right: 30%;
  }

  .s3 {
    position: absolute;
    width: 80px;
    top: 40%;
    left: 20%;
  }
`;

export const Scribbles = styled(motion.div)`
  position: relative;
  display: flex;

  justify-content: center;
  align-items: center;
  figure {
    max-width: 800px;
  }
  .s7,
  .s10,
  .s1,
  .s3,
  .s5 {
    position: absolute;
    display: none;
    ${props => props.theme.breakpoints.TABLET} {
      display: block;
    }
  }

  .s7 {
    width: 120px;
    top: 20%;
    left: 15%;
  }

  .s10 {
    width: 200px;
    top: 25%;
    right: 15%;
  }

  .s5 {
    z-index: -1;
    width: 50px;
    top: 40%;
    left: 25%;
  }
`;
