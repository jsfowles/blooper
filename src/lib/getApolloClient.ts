import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'isomorphic-unfetch';

interface ApolloClientOptions {
  preview?: boolean;
}

export const getApolloClient = (
  { preview }: ApolloClientOptions = { preview: false },
): ApolloClient<any> => {
  const token = preview
    ? process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN
    : process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN;

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master`,
      credentials: 'same-origin',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      fetch,
    }),
  });
};
