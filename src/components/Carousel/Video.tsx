// @ts-nocheck
import React from 'react';

import Button from '@components/Button';
import Video from '@components/Video';

const VideoPlayer = ({ assetLink, textSummary }) => {
  if (!assetLink) {
    return null;
  }

  return (
    <>
      {assetLink && <Video url={assetLink} />}

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <h4>{textSummary}</h4>
        {assetLink && (
          <a href="https://www.youtube.com/playlist?list=PLX7ehdcDltWiMQ-ffmCB4_OBLaU8IXPxw">
            <Button>view more</Button>
          </a>
        )}
      </div>
    </>
  );
};

export default VideoPlayer;
