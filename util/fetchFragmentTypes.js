const fetch = require('isomorphic-unfetch');
const fs = require('fs');
require('dotenv').config();

const token = !!process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN
  ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN
  : process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN;
fetch(
  `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      variables: {},
      query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
    }),
  },
)
  .then(result => result.json())
  .then(result => {
    const possibleTypes = {};

    result.data.__schema.types.forEach(supertype => {
      if (supertype.possibleTypes) {
        possibleTypes[supertype.name] = supertype.possibleTypes.map(
          subtype => subtype.name,
        );
      }
    });

    fs.writeFile(
      './src/lib/fragmentTypes.json',
      JSON.stringify(possibleTypes),
      err => {
        if (err) {
          console.error('Error writing possibleTypes.json', err);
        } else {
          console.log('Fragment types successfully extracted!');
        }
      },
    );
  });
