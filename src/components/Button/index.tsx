import React from 'react';
import { BtnWrapper } from './styles';

import { FiArrowRight } from 'react-icons/fi';

const Button = ({ children, ...props }) => {
  return (
    <BtnWrapper>
      {children}
      <FiArrowRight />
    </BtnWrapper>
  );
};

export default Button;
