import { gql } from '@apollo/client';
import { textBlockFrag } from './fragments/TextBlock';
import { mediaAssetFrag } from '@graphql/fragments/MediaAsset';

export const PageQuery = gql`
  ${textBlockFrag.textBlock}
  ${mediaAssetFrag.mediaAsset}
  query Page($id: String!) {
    page(id: $id) {
      heroSection {
        ...TextBlock
      }
      pageContentCollection {
        items {
          ...MediaAsset
        }
      }
    }
  }
`;
