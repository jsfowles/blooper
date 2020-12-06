import { gql } from '@apollo/client';

export const mediaAssetFrag = {
  mediaAsset: gql`
    fragment MediaAsset on MediaAsset {
      sys {
        id
      }
      heading
      textSummary
      mediaAsset {
        sys {
          id
        }
        url
        width
        height
      }
      assetLink
      slug
    }
  `,
};
