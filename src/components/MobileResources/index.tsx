// @ts-nocheck
import React from 'react';
import ReactPlayer from 'react-player';
import Button from '@components/Button';

const MobileResources = ({ cards }) => {
  return (
    <div style={{ width: '100vw' }}>
      {cards.map(({ mediaAsset, heading, textSummary, assetLink }, index) => (
        <div
          style={{
            padding: '40px 7vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <p style={{ fontSize: 24, paddingBottom: 10 }}>{heading}</p>
          <p style={{ fontSize: 18, paddingBottom: 20 }}>{textSummary}</p>
          {mediaAsset?.url ? (
            <div>
              <img src={mediaAsset?.url} style={{ width: '100%' }} />
            </div>
          ) : (
            <div className="player-wrapper">
              <ReactPlayer
                url={assetLink}
                width="100%"
                height="100%"
                className="react-player"
              />
            </div>
          )}
          <a href={assetLink} target="_blank">
            <Button>View</Button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default MobileResources;
