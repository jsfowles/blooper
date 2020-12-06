import React from 'react';
import { BtnWrapper } from './styles';

import { FiArrowRight } from 'react-icons/fi';

interface Props {
  children: React.ReactNode;
}
const Button = ({ children }: Props) => {
  return (
    <BtnWrapper>
      {children}
      <FiArrowRight />
    </BtnWrapper>
  );
};

export default Button;
