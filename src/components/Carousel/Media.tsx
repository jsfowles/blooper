// @ts-nocheck
import React from 'react';

import Image from '@components/Image';
import Button from '@components/Button';

const Media = ({ textSummary, mediaAsset, assetLink, noShadow }) => {
  if (!mediaAsset) {
    return null;
  }

  const isLandscape = mediaAsset.height < mediaAsset.width;

  console.log(isLandscape);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isLandscape ? 'column' : 'row',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      {mediaAsset && (
        <a href={assetLink} target="_blank">
          <Image {...mediaAsset} hasShadow={noShadow ? false : true} />
        </a>
      )}
      {!noShadow && (
        <div
          style={{
            width: isLandscape && '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: !isLandscape && '25px',
            paddingTop: isLandscape && 25,
          }}
        >
          <p style={{ paddingTop: 'initial', fontSize: 18, textAlign: 'left' }}>
            {textSummary}
          </p>
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
