// @ts-nocheck
import React from 'react';

import Image from '@components/Image';
import Button from '@components/Button';

const Media = ({ textSummary, mediaAsset, assetLink, noShadow }) => {
  console.log(mediaAsset);
  if (!mediaAsset) {
    return null;
  }
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      {mediaAsset && (
        <Image {...mediaAsset} hasShadow={noShadow ? false : true} />
      )}
      {!noShadow && (
        <div
          style={{
            maxWidth: '50%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: '5%',
          }}
        >
          <h4 style={{ paddingTop: 'initial' }}>{textSummary}</h4>
          <div style={{ display: 'flex' }}>
            <a href={assetLink} target="_blank">
              <Button>view</Button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Media;
