import React from 'react';
import midi from '../public/docs/blooper-midi.html';

const Interface = () => {
  const __html = require('../public/docs/blooper-midi.html');
  const template = { __html: __html };
  return (
    <div>
      <div dangerouslySetInnerHTML={template} />;
    </div>
  );
};

export default Interface;
