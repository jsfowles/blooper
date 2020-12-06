import styled from 'styled-components';

export const A = styled.a(
  ({ theme }) => `
    color: red;
    text-decoration: none;
    transition: color ${theme.constants.animationDurationLong}ms ${theme.constants.animationTiming};

    &:hover {
      color: ${theme.uiColors.linkColorHover};
    }

    &:focus {
      color: ${theme.uiColors.linkColorFocus};
    }
  `,
);

export const Hi = styled(motion.div)`
  ${props => props.theme.breakpoints.mobile} {
  }
`;
