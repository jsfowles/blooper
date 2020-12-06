import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import fetch from 'isomorphic-unfetch';
import possibleTypes from './fragmentTypes.json';

/**
 * Creates and configures the ApolloClient
 */
export function createApolloClient({ initialState = {} } = {}) {
  const ssrMode = typeof window === 'undefined';
  const cache = new InMemoryCache({ possibleTypes }).restore(initialState);

  return new ApolloClient({
    ssrMode,
    link: createIsomorphicLink(),
    cache,
  });
}

function createIsomorphicLink() {
  const uri = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master`;

  const authLink = setContext(async (_, { headers }) => {
    const token = !!process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN
      ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN
      : process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN;
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    };
  });

  const httpLink = new HttpLink({
    uri,
    credentials: 'same-origin',
    fetch,
  });

  return authLink.concat(httpLink);
}
