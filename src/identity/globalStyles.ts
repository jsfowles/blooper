import { createGlobalStyle } from 'styled-components';

import { constants } from './constants';
import { uiColors, colors } from './colors';

export const GlobalStyles = createGlobalStyle`
  :root {
    ${uiColors}
    ${colors}
    ${constants}
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  
html { font-family: sans-serif; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; }
body { margin: 0; }

button, input, optgroup, select, textarea { color: inherit; font: inherit; margin: 0; }
button { overflow: visible; }
button, select { text-transform: none; }

select {width: 300px;}

button, html input[type="button"],
input[type="reset"],
input[type="submit"] { -webkit-appearance: button; cursor: pointer; }

button[disabled], html input[disabled] { cursor: default; }

.container { position: relative; width: 100%; margin: 0 auto; padding: 0 5px; }
.column,
.columns { width: 100%; float: left; box-sizing: border-box; padding: 10px;}

html { font-size: 62.5%; }
body {
  font-size: 1.5em; line-height: 0.5; font-weight: 400;
  font-family: "Sanchez", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: #fff; 
  color:#357 }

h1, h2, h3, h4, h5, h6 { margin-top: 0; margin-bottom: 1rem; font-weight: 300; }
h1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem; }
h2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }
h3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }
h4 { font-size: 3.0rem; line-height: 1.35; letter-spacing: -.0rem; }
h5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }
h6 { font-size: 1.5rem; line-height: 1.0;  letter-spacing: 0; color: #000; }

.message { font-size: 1.5rem;  letter-spacing: -.05rem; color: #000;}

/* content img url from knobscreative.com */
.message::after {
    content: url("https://images.squarespace-cdn.com/content/v1/5e9498ff28a31c410e4cc1bd/1586998406860-VGMK7ROFH63O453A8XZ3/ke17ZwdGBToddI8pDm48kLjcMuGWp1lJEmQgvPcfaydZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI3BVWku5osY7VlmAh450lTvj4ug1Vfknv5r1J4VpBE8g/Tight+squiggle.png?format=300w");
    position: absolute;
    top: 0;
    left: 400px;
    z-index: -1;
    opacity: 0.4;
}

button, .button { margin-bottom: 1rem; color: #000;}

.button, button, select, input[type="button"]
{
  display: inline-block; height: 24px; width: 92px; padding: 0 0px;
  text-align: center; font-size: 11px; font-weight: 600;
  line-height: 24px; letter-spacing: 0rem;
  text-transform: uppercase; text-decoration: none; white-space: nowrap;
  background-color: #A3D0E5; color: #000;
  box-sizing: border-box; border-radius: 5px; border: 1px solid #A3D0E5;
  cursor: pointer;
}

input.button:hover, button:hover,
input[type="button"]:hover { color: #EEE; background-color: #357; border-color: #357; }

select:hover { color: #EEE; background-color: #357; border-color: #357; }

input.button:focus, button:focus,
input[type="button"]:focus { color: #000; background-color: #fff; border-color: #999; outline: 0; }

input.button:disabled, button:disabled,
input[type="button"]:disabled { color: #999; background-color: #ededed; border-color: #ededed; outline: 0; }

input.select:disabled, select:disabled,
input[type="select"]:disabled { color: #999; background-color: #ededed; border-color: #ededed; outline: 0; }

  }
`;
