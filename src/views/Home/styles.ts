import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Content = styled(motion.div)`
  position: relative;
  padding-bottom: 20%;
  h1 {
    font-size: 124px;
    text-align: center;
  }

  p {
    padding-top: 48px;
    font-size: 21px;
    text-align: center;
    max-width: 56ch;
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
  .pedal {
    width: 800px;
  }

  .s7,
  .s10,
  .s1,
  .s3,
  .s5 {
    position: absolute;
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
