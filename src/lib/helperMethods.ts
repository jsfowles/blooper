import { round } from 'lodash';

export const targetForUrl = (href?: string): string => {
  return determineExternalLink(href) ? '_blank' : '';
};

export const determineExternalLink = (href?: string): boolean => {
  if (href) {
    if (href.startsWith('/')) {
      return false;
    }
    if (typeof window !== 'undefined') {
      return !href.startsWith(window.location.origin);
    }
  }
  return false;
};

export const remCalc = (pixelValue: number, baseValue: number = 16) =>
  `${round(pixelValue / baseValue, 2)}rem`;

const formatExpNot = (value: number, decimals = 2) =>
  Number(`${value}e${decimals}`);

export const viewCalc = (
  pixelValue: number,
  viewDirection: string = 'vw',
  baseValue: number = 1680,
  decimals: number = 2,
) =>
  `${formatExpNot(
    Math.round(formatExpNot((pixelValue / baseValue) * 100, decimals)),
    decimals * -1,
  )}${viewDirection}`;
