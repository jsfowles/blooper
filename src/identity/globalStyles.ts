import { createGlobalStyle } from 'styled-components';

import { constants } from './constants';
import { colors, uiColors } from './colors';
import { breakpoints } from '@identity/breakpoints';

export const GlobalStyles = createGlobalStyle`

  .carousel__back-button, .carousel__next-button {
    border: none;
    background: none;
    position: absolute;
    top: 50%;
  }

  .carousel__back-button {
    left: 0;
  }

  .carousel__next-button {
    right: 0;
  }

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
    text-align: center;
  }

  body {
    font-family: 'Sanchez', san-serif;
    font-weight: 400;
    font-style: normal;
    position: relative;
    display: flex;
    flex-direction: column;
    text-transform: lowercase;
    color: #5b6770;

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
    background-color: #428fa4;
  }

  .next-image {
    border-radius: 25px;
  }

  .swiper-slide-shadow-left, .swiper-slide-shadow-right {
    background: transparent !important;
  }

  .player-wrapper {
    position: relative;
    padding-top: 50.25%;
    height: 100%;
    width: 100%;
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }

  .carousel {
    position: relative;
  }

  .carousel__inner-slide {
    display: flex;
    flex-direction: column;

    img, iframe {
      padding: 0 10vw;

    }

  }

  .bloop-img {
    z-index: 1;
  }

  .carousel__dot-group {

    display: flex;
    justify-content: center;
    margin-top: 20px;

    button {
      margin: 0 2px;
      background: #428fa4;
      border: 2px solid #428fa4;

    }
  }

  .hidden {
    opacity: 0;
    transition: all 500ms ease-in-out;
    transform: scale(0.6);
  }

  .visible {
    opacity: 1;
    transition: all 500ms ease-in-out;
    transform: scale(1);


  }

  .filled-header {
    margin: 0 auto;

    padding-bottom: 24px;
    color: #5b6770;
    text-align: center;
    font-size: 40px;

    ${breakpoints.TABLET_HD} {
      font-size: 60px
    }
  }

  a {
    color: #5B6770;
  }

  p {
    a {
      color: #428fa4
    }
  }

ul {
    padding-bottom:1em;
    list-style: disc;
    list-style-position: inside;
    li {
        padding: 0.25em 0;
    }
}
  .sliderAnimation___300FY {
    transition: transform 1.0s;
  }
`;
