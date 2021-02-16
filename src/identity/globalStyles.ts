import { createGlobalStyle } from 'styled-components';

import { constants } from './constants';
import { colors, uiColors } from './colors';
import { breakpoints } from '@identity/breakpoints';

export const GlobalStyles = createGlobalStyle`
  :root {
    ${uiColors} ${colors} ${constants}
  }

  #__next {

  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    touch-action: manipulation;
    background: #ffffff;
  }

  * {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  header {

    z-index: 1000;
  }

  footer {

    z-index: 1000;
  }

  p {
    line-height: 1.25;
  }

  body {
    font-family: 'Sanchez', san-serif;
    font-weight: 400;
    font-style: normal;
    position: relative;
    display: flex;
    flex-direction: column;
    text-transform: lowercase;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  object, embed {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }

  .burger .burger-lines,
  .burger .burger-lines:after,
  .burger .burger-lines:before {
    background-color: #a8d1e4;
  }

  .next-image {
    border-radius: 25px;
  }

  .swiper-slide-shadow-left, .swiper-slide-shadow-right {
    background: transparent !important;
  }

  .player-wrapper {
    position: relative;
    padding-top: 56.25%
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }

  .carousel__inner-slide {
    display: flex;
    flex-direction: column;
    padding: 0 7vw;


    img {

      object-fit: contain;
    }

  }

  .carousel__dot-group {

    display: flex;
    justify-content: center;
    margin-top: 20px;

    button {
      margin: 0 2px;
      border: 2px solid #cbdce3;
    }
  }

  .filled-header {
    margin: 0 auto;
    width: max-content;
    padding: 18px;
    background: #cbdce3;
    color: white;
    text-align: center;
    font-size: 40px;

    ${breakpoints.TABLET_HD}{
    font-size: 60px
    }
  }
    a {
      color: #669999;

    }
`;
