// @ts-nocheck
import React from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import { MdPictureAsPdf, MdOpenInBrowser } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { TypeScale } from '@identity/type';

const StyledPopup = styled(Popup)`
  &-overlay {
    background: black;
    opacity: 0.8;
  }
  &-content {
    color: pink;
    height: 80vh;
    span {
      :hover {
        cursor: pointer;
      }
    }
  }
`;

const Downloads = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        padding: '7vw',
        margin: '0 auto',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <TypeScale.H2
          space={{ margin: 'bottom-md' }}
          style={{ width: 'max-content' }}
        >
          manual
        </TypeScale.H2>
        <a
          style={{ paddingLeft: 20 }}
          href="/docs/Blooper_Manual_Pedal_Chase_Bliss_Audio.pdf"
          download
        >
          <IconContext.Provider
            value={{ color: 'var(--blue-medium)', size: '40px' }}
          >
            <MdPictureAsPdf />
          </IconContext.Provider>
        </a>
        <StyledPopup
          trigger={
            <span style={{ paddingLeft: 10 }}>
              <IconContext.Provider
                value={{ color: 'var(--blue-medium)', size: '40px' }}
              >
                <MdOpenInBrowser />
              </IconContext.Provider>
            </span>
          }
          modal
        >
          <embed
            src="/docs/Blooper_Manual_Pedal_Chase_Bliss_Audio.pdf"
            width={800}
            height="100%"
          />
        </StyledPopup>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <TypeScale.H2
          space={{ margin: 'bottom-md' }}
          style={{ width: 'max-content' }}
        >
          MIDI manual
        </TypeScale.H2>
        <a
          style={{ paddingLeft: 20 }}
          href="/docs/Blooper_Manual_Pedal_Chase_Bliss_Audio.pdf"
          download
        >
          <IconContext.Provider
            value={{ color: 'var(--blue-medium)', size: '40px' }}
          >
            <MdPictureAsPdf />
          </IconContext.Provider>
        </a>
        <StyledPopup
          trigger={
            <span style={{ paddingLeft: 10 }}>
              <IconContext.Provider
                value={{ color: 'var(--blue-medium)', size: '40px' }}
              >
                <MdOpenInBrowser />
              </IconContext.Provider>
            </span>
          }
          modal
        >
          <embed
            src="/docs/Blooper_MIDI_Manual_Pedal_Chase_Bliss_Audio.pdf"
            width={800}
            height="100%"
          />
        </StyledPopup>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <TypeScale.H2
          space={{ margin: 'bottom-md' }}
          style={{ width: 'max-content' }}
        >
          press kit
        </TypeScale.H2>
        <a
          style={{ paddingLeft: 20 }}
          href="/docs/Blooper_Press+Kit_Chase+Bliss+Audio.zip"
          download
        >
          <IconContext.Provider
            value={{ color: 'var(--blue-medium)', size: '40px' }}
          >
            <MdPictureAsPdf />
          </IconContext.Provider>
        </a>
      </div>
    </div>
  );
};

export default Downloads;
