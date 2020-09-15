// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

export const Ratio = styled.div`
  display: flex;
  position: relative;
  width: 50%;
  height: 0;
  padding-top: 10%;
`;

export const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: hotpink;
`;

export default function Element(props) {
  return (
    <Ratio>
      <Inner>{props.children}</Inner>
    </Ratio>
  );
}
