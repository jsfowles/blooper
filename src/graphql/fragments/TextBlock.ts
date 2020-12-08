import { gql } from '@apollo/client';

export const textBlockFrag = {
  textBlock: gql`
    fragment TextBlock on TextBlock {
      heading
      description
      image {
        url
        width
        height
      }
      sys {
        id
      }
    }
  `,
};
