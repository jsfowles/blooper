import React from 'react';

const Interface = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ margin: '0 auto', paddingTop: '60px' }}>
        <meta charSet="utf-8" />
        <title>ChaseBliss Blooper Firmware Update v3.0</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Sanchez&display=swap"
          rel="stylesheet"
        />
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <div
          id="main"
          style={{
            paddingTop: '20px',
            paddingRight: '10px',
            paddingBottom: '10px',
            paddingLeft: '30px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '645px',
              alignItems: 'flex-end',
            }}
          >
            <h4 id="title">B.L.I.P</h4>
            <h5 id="message" className="message" />
          </div>
          <div style={{ width: '645px', height: '20px' }}>
            <h7>
              Welcome to B.L.I.P! The Blooper Interface Program. Use me to
              update firmware,
            </h7>
          </div>
          <div style={{ width: '645px', height: '20px' }}>
            <h7>
              {' '}
              download saved loops, and customize the behaviour of your Blooper.
            </h7>
          </div>
          <div style={{ width: '645px', height: '8px' }} />
          <div style={{ width: '645px', height: '20px' }}>
            <h7>
              <b>NOTES:</b>
            </h7>
          </div>
          <div style={{ width: '645px', height: '20px' }}>
            <h7>
              - This web page runs only Google Chrome and requires either Mac OS
              or Windows.
            </h7>
          </div>
          <div style={{ width: '645px', height: '20px' }}>
            <h7>
              - Windows users must download and install the free{' '}
              <a href="https://www.xmos.ai/file/usb-audio-class-20-evaluation-driver-windows">
                XMOS audio driver
              </a>
              .
            </h7>
          </div>
          <div style={{ width: '645px', height: '8px' }} />
          <div style={{ width: '645px', height: '20px' }}>
            <h7>
              <b>INSTRUCTIONS:</b>
            </h7>
          </div>
          <div style={{ width: '645px', height: '20px' }}>
            <h7>
              - Make sure your Blooper is powered, and connected via the
              included USB cable.
            </h7>
          </div>
          <div style={{ width: '645px', height: '20px' }}>
            <h7>
              - Chrome will request access to <i>use your MIDI devices</i>,
              select <i>Allow</i>.
            </h7>
          </div>
          <div style={{ width: '645px', height: '20px' }}>
            <h7>
              - After this page connects with Blooper you will see{' '}
              <i>(Ready)</i> on the top right.
            </h7>
          </div>
          <div
            style={{
              width: '645px',
              height: '2px',
              backgroundColor: '#A3D0E5',
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingTop: '15px',
              paddingBottom: '5px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
              }}
            >
              <button id="update">Update</button>
            </div>
            <div style={{ display: 'flex', width: '16px' }} />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
              }}
            >
              <h5>Firmware v3.0</h5>
            </div>
          </div>
          <div style={{ width: '645px', height: '20px' }}>
            <h7>Update here for the latest bug fixes and new features.</h7>
          </div>
          <div
            style={{
              width: '645px',
              height: '2px',
              backgroundColor: '#A3D0E5',
            }}
          />
          <div style={{ width: '645px', height: '10px' }} />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'left',
              padding: '1px 0',
            }}
          >
            <h5>Export Session to WAV File(s)</h5>
          </div>
          <div style={{ width: '645px', height: '20px' }}>
            <h7>
              Here you can download the individual layers of your saved loops.
              Click any of the layer{' '}
            </h7>
          </div>
          <div style={{ width: '645px', height: '20px' }}>
            <h7>
              buttons to download a WAV file of that audio, or use the ALL
              button to download all
            </h7>
          </div>
          <div style={{ width: '645px', height: '20px' }}>
            <h7>layers from the selected loop.</h7>
          </div>
          <div style={{ width: '645px', height: '8px' }} />
          <div style={{ width: '645px', height: '20px' }}>
            <h7>
              <b>NOTE:</b>
            </h7>
          </div>
          <div style={{ width: '645px', height: '20px' }}>
            <h7>
              - Downloads work one at a time, and interrupting an active
              download may cause
            </h7>
          </div>
          <div style={{ width: '645px', height: '20px' }}>
            <h7>errors in the audio.</h7>
          </div>
          <div style={{ width: '645px', height: '10px' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }} id="save">
            <div
              style={{ display: 'flex', flexDirection: 'row', height: '28px' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '90px',
                }}
              >
                <h6 id="session_1">Session 1</h6>
              </div>
              <div style={{ display: 'flex', width: '1px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '36px',
                }}
              >
                <h6 id="length_1">0.0</h6>
              </div>
              <div style={{ display: 'flex', width: '16px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_1_1">
                  Layer 1
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_1_2">
                  Layer 2
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_1_3">
                  Layer 3
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_1_4">
                  Layer 4
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_1_5">
                  Layer 5
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_1_6">
                  Layer 6
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_1_7">
                  Layer 7
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_1_8">
                  Layer 8
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '32px',
                }}
              >
                <button disabled id="dnload_1_9">
                  All
                </button>
              </div>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'row', height: '28px' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '90px',
                }}
              >
                <h6 id="session_2">Session 2</h6>
              </div>
              <div style={{ display: 'flex', width: '1px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '36px',
                }}
              >
                <h6 id="length_2">0.0</h6>
              </div>
              <div style={{ display: 'flex', width: '16px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_2_1">
                  Layer 1
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_2_2">
                  Layer 2
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_2_3">
                  Layer 3
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_2_4">
                  Layer 4
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_2_5">
                  Layer 5
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_2_6">
                  Layer 6
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_2_7">
                  Layer 7
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_2_8">
                  Layer 8
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '32px',
                }}
              >
                <button disabled id="dnload_2_9">
                  All
                </button>
              </div>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'row', height: '28px' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '90px',
                }}
              >
                <h6 id="session_3">Session 3</h6>
              </div>
              <div style={{ display: 'flex', width: '1px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '36px',
                }}
              >
                <h6 id="length_3">0.0</h6>
              </div>
              <div style={{ display: 'flex', width: '16px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_3_1">
                  Layer 1
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_3_2">
                  Layer 2
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_3_3">
                  Layer 3
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_3_4">
                  Layer 4
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_3_5">
                  Layer 5
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_3_6">
                  Layer 6
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_3_7">
                  Layer 7
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_3_8">
                  Layer 8
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '32px',
                }}
              >
                <button disabled id="dnload_3_9">
                  All
                </button>
              </div>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'row', height: '28px' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '90px',
                }}
              >
                <h6 id="session_4">Session 4</h6>
              </div>
              <div style={{ display: 'flex', width: '1px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '36px',
                }}
              >
                <h6 id="length_4">0.0</h6>
              </div>
              <div style={{ display: 'flex', width: '16px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_4_1">
                  Layer 1
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_4_2">
                  Layer 2
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_4_3">
                  Layer 3
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_4_4">
                  Layer 4
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_4_5">
                  Layer 5
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_4_6">
                  Layer 6
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_4_7">
                  Layer 7
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_4_8">
                  Layer 8
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '32px',
                }}
              >
                <button disabled id="dnload_4_9">
                  All
                </button>
              </div>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'row', height: '28px' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '90px',
                }}
              >
                <h6 id="session_5">Session 5</h6>
              </div>
              <div style={{ display: 'flex', width: '1px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '36px',
                }}
              >
                <h6 id="length_5">0.0</h6>
              </div>
              <div style={{ display: 'flex', width: '16px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_5_1">
                  Layer 1
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_5_2">
                  Layer 2
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_5_3">
                  Layer 3
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_5_4">
                  Layer 4
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_5_5">
                  Layer 5
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_5_6">
                  Layer 6
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_5_7">
                  Layer 7
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_5_8">
                  Layer 8
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '32px',
                }}
              >
                <button disabled id="dnload_5_9">
                  All
                </button>
              </div>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'row', height: '28px' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '90px',
                }}
              >
                <h6 id="session_6">Session 6</h6>
              </div>
              <div style={{ display: 'flex', width: '1px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '36px',
                }}
              >
                <h6 id="length_6">0.0</h6>
              </div>
              <div style={{ display: 'flex', width: '16px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_6_1">
                  Layer 1
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_6_2">
                  Layer 2
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_6_3">
                  Layer 3
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_6_4">
                  Layer 4
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_6_5">
                  Layer 5
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_6_6">
                  Layer 6
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_6_7">
                  Layer 7
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_6_8">
                  Layer 8
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '32px',
                }}
              >
                <button disabled id="dnload_6_9">
                  All
                </button>
              </div>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'row', height: '28px' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '90px',
                }}
              >
                <h6 id="session_7">Session 7</h6>
              </div>
              <div style={{ display: 'flex', width: '1px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '36px',
                }}
              >
                <h6 id="length_7">0.0</h6>
              </div>
              <div style={{ display: 'flex', width: '16px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_7_1">
                  Layer 1
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_7_2">
                  Layer 2
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_7_3">
                  Layer 3
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_7_4">
                  Layer 4
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_7_5">
                  Layer 5
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_7_6">
                  Layer 6
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_7_7">
                  Layer 7
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_7_8">
                  Layer 8
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '32px',
                }}
              >
                <button disabled id="dnload_7_9">
                  All
                </button>
              </div>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'row', height: '28px' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '90px',
                }}
              >
                <h6 id="session_8">Session 8</h6>
              </div>
              <div style={{ display: 'flex', width: '1px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '36px',
                }}
              >
                <h6 id="length_8">0.0</h6>
              </div>
              <div style={{ display: 'flex', width: '16px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_8_1">
                  Layer 1
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_8_2">
                  Layer 2
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_8_3">
                  Layer 3
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_8_4">
                  Layer 4
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_8_5">
                  Layer 5
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_8_6">
                  Layer 6
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_8_7">
                  Layer 7
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_8_8">
                  Layer 8
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '32px',
                }}
              >
                <button disabled id="dnload_8_9">
                  All
                </button>
              </div>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'row', height: '28px' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '90px',
                }}
              >
                <h6 id="session_9">Session 9</h6>
              </div>
              <div style={{ display: 'flex', width: '1px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '36px',
                }}
              >
                <h6 id="length_9">0.0</h6>
              </div>
              <div style={{ display: 'flex', width: '16px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_9_1">
                  Layer 1
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_9_2">
                  Layer 2
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_9_3">
                  Layer 3
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_9_4">
                  Layer 4
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_9_5">
                  Layer 5
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_9_6">
                  Layer 6
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_9_7">
                  Layer 7
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_9_8">
                  Layer 8
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '32px',
                }}
              >
                <button disabled id="dnload_9_9">
                  All
                </button>
              </div>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'row', height: '28px' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '90px',
                }}
              >
                <h6 id="session_10">Session 10</h6>
              </div>
              <div style={{ display: 'flex', width: '1px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '36px',
                }}
              >
                <h6 id="length_10">0.0</h6>
              </div>
              <div style={{ display: 'flex', width: '16px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_10_1">
                  Layer 1
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_10_2">
                  Layer 2
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_10_3">
                  Layer 3
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_10_4">
                  Layer 4
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_10_5">
                  Layer 5
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_10_6">
                  Layer 6
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_10_7">
                  Layer 7
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_10_8">
                  Layer 8
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '32px',
                }}
              >
                <button disabled id="dnload_10_9">
                  All
                </button>
              </div>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'row', height: '28px' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '90px',
                }}
              >
                <h6 id="session_11">Session 11</h6>
              </div>
              <div style={{ display: 'flex', width: '1px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '36px',
                }}
              >
                <h6 id="length_11">0.0</h6>
              </div>
              <div style={{ display: 'flex', width: '16px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_11_1">
                  Layer 1
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_11_2">
                  Layer 2
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_11_3">
                  Layer 3
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_11_4">
                  Layer 4
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_11_5">
                  Layer 5
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_11_6">
                  Layer 6
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_11_7">
                  Layer 7
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_11_8">
                  Layer 8
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '32px',
                }}
              >
                <button disabled id="dnload_11_9">
                  All
                </button>
              </div>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'row', height: '28px' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '90px',
                }}
              >
                <h6 id="session_12">Session 12</h6>
              </div>
              <div style={{ display: 'flex', width: '1px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '36px',
                }}
              >
                <h6 id="length_12">0.0</h6>
              </div>
              <div style={{ display: 'flex', width: '16px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_12_1">
                  Layer 1
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_12_2">
                  Layer 2
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_12_3">
                  Layer 3
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_12_4">
                  Layer 4
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_12_5">
                  Layer 5
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_12_6">
                  Layer 6
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_12_7">
                  Layer 7
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_12_8">
                  Layer 8
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '32px',
                }}
              >
                <button disabled id="dnload_12_9">
                  All
                </button>
              </div>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'row', height: '28px' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '90px',
                }}
              >
                <h6 id="session_13">Session 13</h6>
              </div>
              <div style={{ display: 'flex', width: '1px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '36px',
                }}
              >
                <h6 id="length_13">0.0</h6>
              </div>
              <div style={{ display: 'flex', width: '16px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_13_1">
                  Layer 1
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_13_2">
                  Layer 2
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_13_3">
                  Layer 3
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_13_4">
                  Layer 4
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_13_5">
                  Layer 5
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_13_6">
                  Layer 6
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_13_7">
                  Layer 7
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_13_8">
                  Layer 8
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '32px',
                }}
              >
                <button disabled id="dnload_13_9">
                  All
                </button>
              </div>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'row', height: '28px' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '90px',
                }}
              >
                <h6 id="session_14">Session 14</h6>
              </div>
              <div style={{ display: 'flex', width: '1px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '36px',
                }}
              >
                <h6 id="length_14">0.0</h6>
              </div>
              <div style={{ display: 'flex', width: '16px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_14_1">
                  Layer 1
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_14_2">
                  Layer 2
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_14_3">
                  Layer 3
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_14_4">
                  Layer 4
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_14_5">
                  Layer 5
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_14_6">
                  Layer 6
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_14_7">
                  Layer 7
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_14_8">
                  Layer 8
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '32px',
                }}
              >
                <button disabled id="dnload_14_9">
                  All
                </button>
              </div>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'row', height: '28px' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '90px',
                }}
              >
                <h6 id="session_15">Session 15</h6>
              </div>
              <div style={{ display: 'flex', width: '1px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '36px',
                }}
              >
                <h6 id="length_15">0.0</h6>
              </div>
              <div style={{ display: 'flex', width: '16px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_15_1">
                  Layer 1
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_15_2">
                  Layer 2
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_15_3">
                  Layer 3
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_15_4">
                  Layer 4
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_15_5">
                  Layer 5
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_15_6">
                  Layer 6
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_15_7">
                  Layer 7
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_15_8">
                  Layer 8
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '32px',
                }}
              >
                <button disabled id="dnload_15_9">
                  All
                </button>
              </div>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'row', height: '28px' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '90px',
                }}
              >
                <h6 id="session_16">Session 16</h6>
              </div>
              <div style={{ display: 'flex', width: '1px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '36px',
                }}
              >
                <h6 id="length_16">0.0</h6>
              </div>
              <div style={{ display: 'flex', width: '16px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_16_1">
                  Layer 1
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_16_2">
                  Layer 2
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_16_3">
                  Layer 3
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_16_4">
                  Layer 4
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_16_5">
                  Layer 5
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_16_6">
                  Layer 6
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_16_7">
                  Layer 7
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '55px',
                }}
              >
                <button disabled id="dnload_16_8">
                  Layer 8
                </button>
              </div>
              <div style={{ display: 'flex', width: '4px' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  width: '32px',
                }}
              >
                <button disabled id="dnload_16_9">
                  All
                </button>
              </div>
            </div>
          </div>
          <div style={{ width: '660px', height: '10px' }} />
          <div
            style={{
              width: '645px',
              height: '2px',
              backgroundColor: '#A3D0E5',
            }}
          />
          <div style={{ width: '660px', height: '10px' }} />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'left',
            }}
          >
            <h5>Modifier Assignments</h5>
          </div>
          <div style={{ width: '645px', height: '20px' }}>
            <h7>
              Customize the arrangement of your modifiers! Changes take place
              immediately and do
            </h7>
          </div>
          <div style={{ width: '645px', height: '20px' }}>
            <h7>
              not require you to update the firmware. The ALT banks are accessed
              using the BANK A
            </h7>
          </div>
          <div style={{ width: '645px', height: '20px' }}>
            <h7>and BANK B dip switches on the back of the pedal.</h7>
          </div>
          <div style={{ width: '645px', height: '8px' }} />
          <div style={{ width: '645px', height: '20px' }}>
            <h7>
              <b>NOTES:</b>
            </h7>
          </div>
          <div style={{ width: '645px', height: '20px' }}>
            <h7>
              - If the names of two modifiers are shown in red, it means they
              will create some odd
            </h7>
          </div>
          <div style={{ width: '645px', height: '20px' }}>
            <h7>
              behaviour when used together. You’re still free to use them, but
              it will get weird.
            </h7>
          </div>
          <div style={{ width: '645px', height: '20px' }}>
            <h7>
              - It’s not possible to use two versions of the same modifier at
              once.
            </h7>
          </div>
          <div style={{ width: '660px', height: '10px' }} />
          <div
            style={{ display: 'flex', flexDirection: 'row', height: '20px' }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                width: '100px',
              }}
            >
              <h6 id="modifiers_A1">Bank A</h6>
            </div>
            <div style={{ display: 'flex', width: '20px' }} />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                width: '10px',
              }}
            >
              <h6>1</h6>
            </div>
            <div style={{ display: 'flex', width: '3px' }} />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                height: '12px',
                width: '170px',
              }}
            >
              <select name id="bankA1" style={{ width: '144px' }}>
                <option value={1}>Dropper</option>
                <option value={2}>Scrambler</option>
                <option value={3}>Trimmer (Smooth)</option>
                <option value={4}>Trimmer (Stepped)</option>
                <option value={5}>Filter</option>
                <option value={6}>Speed (Smooth)</option>
                <option value={7}>Speed (Stepped)</option>
                <option value={16}>Speed (Chromatic)</option>
                <option value={8}>Swapper</option>
                <option value={9}>Stutter (Smooth)</option>
                <option value={10}>Stutter (Stepped)</option>
                <option value={11}>Stopper</option>
                <option value={12}>Pitcher (Smooth)</option>
                <option value={13}>Pitcher (Stepped)</option>
                <option value={14}>Stretcher (Smooth)</option>
                <option value={15}>Stretcher (Stepped)</option>
              </select>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                width: '10px',
              }}
            >
              <h6>2</h6>
            </div>
            <div style={{ display: 'flex', width: '3px' }} />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                height: '12px',
                width: '170px',
              }}
            >
              <select
                name
                id="bankA2"
                style={{ alignItems: 'center', width: '144px' }}
              >
                <option value={1}>Dropper</option>
                <option value={2}>Scrambler</option>
                <option value={3}>Trimmer (Smooth)</option>
                <option value={4}>Trimmer (Stepped)</option>
                <option value={5}>Filter</option>
                <option value={6}>Speed (Smooth)</option>
                <option value={7}>Speed (Stepped)</option>
                <option value={16}>Speed (Chromatic)</option>
                <option value={8}>Swapper</option>
                <option value={9}>Stutter (Smooth)</option>
                <option value={10}>Stutter (Stepped)</option>
                <option value={11}>Stopper</option>
                <option value={12}>Pitcher (Smooth)</option>
                <option value={13}>Pitcher (Stepped)</option>
                <option value={14}>Stretcher (Smooth)</option>
                <option value={15}>Stretcher (Stepped)</option>
              </select>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                width: '10px',
              }}
            >
              <h6>3</h6>
            </div>
            <div style={{ display: 'flex', width: '3px' }} />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                height: '12px',
                width: '170px',
              }}
            >
              <select name id="bankA3" style={{ width: '144px' }}>
                <option value={1}>Dropper</option>
                <option value={2}>Scrambler</option>
                <option value={3}>Trimmer (Smooth)</option>
                <option value={4}>Trimmer (Stepped)</option>
                <option value={5}>Filter</option>
                <option value={6}>Speed (Smooth)</option>
                <option value={7}>Speed (Stepped)</option>
                <option value={16}>Speed (Chromatic)</option>
                <option value={8}>Swapper</option>
                <option value={9}>Stutter (Smooth)</option>
                <option value={10}>Stutter (Stepped)</option>
                <option value={11}>Stopper</option>
                <option value={12}>Pitcher (Smooth)</option>
                <option value={13}>Pitcher (Stepped)</option>
                <option value={14}>Stretcher (Smooth)</option>
                <option value={15}>Stretcher (Stepped)</option>
              </select>
            </div>
          </div>
          <div style={{ width: '660px', height: '10px' }} />
          <div
            style={{ display: 'flex', flexDirection: 'row', height: '20px' }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                width: '100px',
              }}
            >
              <h6 id="modifiers_A1">Bank A (Alt)</h6>
            </div>
            <div style={{ display: 'flex', width: '20px' }} />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                width: '10px',
              }}
            >
              <h6>1</h6>
            </div>
            <div style={{ display: 'flex', width: '3px' }} />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                height: '12px',
                width: '170px',
              }}
            >
              <select name id="bankA4" style={{ width: '144px' }}>
                <option value={1}>Dropper</option>
                <option value={2}>Scrambler</option>
                <option value={3}>Trimmer (Smooth)</option>
                <option value={4}>Trimmer (Stepped)</option>
                <option value={5}>Filter</option>
                <option value={6}>Speed (Smooth)</option>
                <option value={7}>Speed (Stepped)</option>
                <option value={16}>Speed (Chromatic)</option>
                <option value={8}>Swapper</option>
                <option value={9}>Stutter (Smooth)</option>
                <option value={10}>Stutter (Stepped)</option>
                <option value={11}>Stopper</option>
                <option value={12}>Pitcher (Smooth)</option>
                <option value={13}>Pitcher (Stepped)</option>
                <option value={14}>Stretcher (Smooth)</option>
                <option value={15}>Stretcher (Stepped)</option>
              </select>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                width: '10px',
              }}
            >
              <h6>2</h6>
            </div>
            <div style={{ display: 'flex', width: '3px' }} />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                height: '12px',
                width: '170px',
              }}
            >
              <select
                name
                id="bankA5"
                style={{ alignItems: 'center', width: '144px' }}
              >
                <option value={1}>Dropper</option>
                <option value={2}>Scrambler</option>
                <option value={3}>Trimmer (Smooth)</option>
                <option value={4}>Trimmer (Stepped)</option>
                <option value={5}>Filter</option>
                <option value={6}>Speed (Smooth)</option>
                <option value={7}>Speed (Stepped)</option>
                <option value={16}>Speed (Chromatic)</option>
                <option value={8}>Swapper</option>
                <option value={9}>Stutter (Smooth)</option>
                <option value={10}>Stutter (Stepped)</option>
                <option value={11}>Stopper</option>
                <option value={12}>Pitcher (Smooth)</option>
                <option value={13}>Pitcher (Stepped)</option>
                <option value={14}>Stretcher (Smooth)</option>
                <option value={15}>Stretcher (Stepped)</option>
              </select>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                width: '10px',
              }}
            >
              <h6>3</h6>
            </div>
            <div style={{ display: 'flex', width: '3px' }} />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                height: '12px',
                width: '170px',
              }}
            >
              <select name id="bankA6" style={{ width: '144px' }}>
                <option value={1}>Dropper</option>
                <option value={2}>Scrambler</option>
                <option value={3}>Trimmer (Smooth)</option>
                <option value={4}>Trimmer (Stepped)</option>
                <option value={5}>Filter</option>
                <option value={6}>Speed (Smooth)</option>
                <option value={7}>Speed (Stepped)</option>
                <option value={16}>Speed (Chromatic)</option>
                <option value={8}>Swapper</option>
                <option value={9}>Stutter (Smooth)</option>
                <option value={10}>Stutter (Stepped)</option>
                <option value={11}>Stopper</option>
                <option value={12}>Pitcher (Smooth)</option>
                <option value={13}>Pitcher (Stepped)</option>
                <option value={14}>Stretcher (Smooth)</option>
                <option value={15}>Stretcher (Stepped)</option>
              </select>
            </div>
          </div>
          <div style={{ width: '660px', height: '10px' }} />
          <div
            style={{ display: 'flex', flexDirection: 'row', height: '20px' }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                width: '100px',
              }}
            >
              <h6 id="modifiers_A1">Bank B</h6>
            </div>
            <div style={{ display: 'flex', width: '20px' }} />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                width: '10px',
              }}
            >
              <h6>4</h6>
            </div>
            <div style={{ display: 'flex', width: '3px' }} />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                height: '12px',
                width: '170px',
              }}
            >
              <select name id="bankB1" style={{ width: '144px' }}>
                <option value={1}>Dropper</option>
                <option value={2}>Scrambler</option>
                <option value={3}>Trimmer (Smooth)</option>
                <option value={4}>Trimmer (Stepped)</option>
                <option value={5}>Filter</option>
                <option value={6}>Speed (Smooth)</option>
                <option value={7}>Speed (Stepped)</option>
                <option value={16}>Speed (Chromatic)</option>
                <option value={8}>Swapper</option>
                <option value={9}>Stutter (Smooth)</option>
                <option value={10}>Stutter (Stepped)</option>
                <option value={11}>Stopper</option>
                <option value={12}>Pitcher (Smooth)</option>
                <option value={13}>Pitcher (Stepped)</option>
                <option value={14}>Stretcher (Smooth)</option>
                <option value={15}>Stretcher (Stepped)</option>
              </select>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                width: '10px',
              }}
            >
              <h6>5</h6>
            </div>
            <div style={{ display: 'flex', width: '3px' }} />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                height: '12px',
                width: '170px',
              }}
            >
              <select
                name
                id="bankB2"
                style={{ alignItems: 'center', width: '144px' }}
              >
                <option value={1}>Dropper</option>
                <option value={2}>Scrambler</option>
                <option value={3}>Trimmer (Smooth)</option>
                <option value={4}>Trimmer (Stepped)</option>
                <option value={5}>Filter</option>
                <option value={6}>Speed (Smooth)</option>
                <option value={7}>Speed (Stepped)</option>
                <option value={16}>Speed (Chromatic)</option>
                <option value={8}>Swapper</option>
                <option value={9}>Stutter (Smooth)</option>
                <option value={10}>Stutter (Stepped)</option>
                <option value={11}>Stopper</option>
                <option value={12}>Pitcher (Smooth)</option>
                <option value={13}>Pitcher (Stepped)</option>
                <option value={14}>Stretcher (Smooth)</option>
                <option value={15}>Stretcher (Stepped)</option>
              </select>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                width: '10px',
              }}
            >
              <h6>6</h6>
            </div>
            <div style={{ display: 'flex', width: '3px' }} />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                height: '12px',
                width: '170px',
              }}
            >
              <select name id="bankB3" style={{ width: '144px' }}>
                <option value={1}>Dropper</option>
                <option value={2}>Scrambler</option>
                <option value={3}>Trimmer (Smooth)</option>
                <option value={4}>Trimmer (Stepped)</option>
                <option value={5}>Filter</option>
                <option value={6}>Speed (Smooth)</option>
                <option value={7}>Speed (Stepped)</option>
                <option value={16}>Speed (Chromatic)</option>
                <option value={8}>Swapper</option>
                <option value={9}>Stutter (Smooth)</option>
                <option value={10}>Stutter (Stepped)</option>
                <option value={11}>Stopper</option>
                <option value={12}>Pitcher (Smooth)</option>
                <option value={13}>Pitcher (Stepped)</option>
                <option value={14}>Stretcher (Smooth)</option>
                <option value={15}>Stretcher (Stepped)</option>
              </select>
            </div>
          </div>
          <div style={{ width: '660px', height: '10px' }} />
          <div
            style={{ display: 'flex', flexDirection: 'row', height: '20px' }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                width: '100px',
              }}
            >
              <h6 id="modifiers_A1">Bank B (Alt)</h6>
            </div>
            <div style={{ display: 'flex', width: '20px' }} />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                width: '10px',
              }}
            >
              <h6>4</h6>
            </div>
            <div style={{ display: 'flex', width: '3px' }} />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                height: '12px',
                width: '170px',
              }}
            >
              <select name id="bankB4" style={{ width: '144px' }}>
                <option value={1}>Dropper</option>
                <option value={2}>Scrambler</option>
                <option value={3}>Trimmer (Smooth)</option>
                <option value={4}>Trimmer (Stepped)</option>
                <option value={5}>Filter</option>
                <option value={6}>Speed (Smooth)</option>
                <option value={7}>Speed (Stepped)</option>
                <option value={16}>Speed (Chromatic)</option>
                <option value={8}>Swapper</option>
                <option value={9}>Stutter (Smooth)</option>
                <option value={10}>Stutter (Stepped)</option>
                <option value={11}>Stopper</option>
                <option value={12}>Pitcher (Smooth)</option>
                <option value={13}>Pitcher (Stepped)</option>
                <option value={14}>Stretcher (Smooth)</option>
                <option value={15}>Stretcher (Stepped)</option>
              </select>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                width: '10px',
              }}
            >
              <h6>5</h6>
            </div>
            <div style={{ display: 'flex', width: '3px' }} />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                height: '12px',
                width: '170px',
              }}
            >
              <select
                name
                id="bankB5"
                style={{ alignItems: 'center', width: '144px' }}
              >
                <option value={1}>Dropper</option>
                <option value={2}>Scrambler</option>
                <option value={3}>Trimmer (Smooth)</option>
                <option value={4}>Trimmer (Stepped)</option>
                <option value={5}>Filter</option>
                <option value={6}>Speed (Smooth)</option>
                <option value={7}>Speed (Stepped)</option>
                <option value={16}>Speed (Chromatic)</option>
                <option value={8}>Swapper</option>
                <option value={9}>Stutter (Smooth)</option>
                <option value={10}>Stutter (Stepped)</option>
                <option value={11}>Stopper</option>
                <option value={12}>Pitcher (Smooth)</option>
                <option value={13}>Pitcher (Stepped)</option>
                <option value={14}>Stretcher (Smooth)</option>
                <option value={15}>Stretcher (Stepped)</option>
              </select>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                width: '10px',
              }}
            >
              <h6>6</h6>
            </div>
            <div style={{ display: 'flex', width: '3px' }} />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                height: '12px',
                width: '170px',
              }}
            >
              <select name id="bankB6" style={{ width: '144px' }}>
                <option value={1}>Dropper</option>
                <option value={2}>Scrambler</option>
                <option value={3}>Trimmer (Smooth)</option>
                <option value={4}>Trimmer (Stepped)</option>
                <option value={5}>Filter</option>
                <option value={6}>Speed (Smooth)</option>
                <option value={7}>Speed (Stepped)</option>
                <option value={16}>Speed (Chromatic)</option>
                <option value={8}>Swapper</option>
                <option value={9}>Stutter (Smooth)</option>
                <option value={10}>Stutter (Stepped)</option>
                <option value={11}>Stopper</option>
                <option value={12}>Pitcher (Smooth)</option>
                <option value={13}>Pitcher (Stepped)</option>
                <option value={14}>Stretcher (Smooth)</option>
                <option value={15}>Stretcher (Stepped)</option>
              </select>
            </div>
          </div>
          <div style={{ width: '660px', height: '10px' }} />
          <div
            style={{
              width: '645px',
              height: '2px',
              backgroundColor: '#A3D0E5',
            }}
          />
          <div style={{ width: '660px', height: '10px' }} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'left',
            }}
          >
            <h5>Additive Assist</h5>
          </div>
          <div style={{ width: '645px', height: '20px' }}>
            <h7>
              Use this for more precise recording of modifiers. When engaged,
              Blooper gives you an
            </h7>
          </div>
          <div style={{ width: '645px', height: '20px' }}>
            <h7>
              accurate preview of how a one-shot recording will sound during
              playback.
            </h7>
          </div>
          <div style={{ width: '645px', height: '8px' }} />
          <div style={{ width: '645px', height: '20px' }}>
            <h7>
              <b>NOTES:</b>
            </h7>
          </div>
          <div style={{ width: '645px', height: '20px' }}>
            <h7>- This feature only affects ADD mode.</h7>
          </div>
          <div style={{ width: '645px', height: '20px' }}>
            <h7>
              - This feature will cause quirks on the clockwise half of Trimmer,
              and the
            </h7>
          </div>
          <div style={{ width: '645px', height: '20px' }}>
            <h7>counter-clockwise half of Stutter.</h7>
          </div>
          <div style={{ width: '660px', height: '10px' }} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'left',
            }}
          >
            <input
              type="checkbox"
              id="add_assist"
              style={{ width: '16px', height: '16px', align: 'middle' }}
            />
            <div style={{ width: '20px', height: '1px' }} />
            <h7>Enable</h7>
          </div>
          <div style={{ width: '660px', height: '10px' }} />
          <div
            style={{
              width: '645px',
              height: '2px',
              backgroundColor: '#A3D0E5',
            }}
          />
          <div style={{ width: '660px', height: '10px' }} />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'left',
            }}
          >
            <h5>Stability Noise</h5>
          </div>
          <div style={{ width: '645px', height: '20px' }}>
            <h7>Customize the level of noise for the stability effect.</h7>
          </div>
          <div
            style={{
              width: '100%',
              justifyContent: 'top',
              position: 'relative',
            }}
          >
            <div
              style={{
                display: 'flex',
                position: 'absolute',
                paddingLeft: '12px',
                width: '645px',
              }}
            >
              <h9
                style={{
                  pointerEvents: 'none',
                  width: '100%',
                  alignItems: 'center',
                  color: '#000',
                }}
                id="noise_min"
              >
                Least
              </h9>
              <h9
                style={{ pointerEvents: 'none', color: '#000' }}
                id="noise_max"
              >
                Most
              </h9>
              <div style={{ width: '20px' }} />
            </div>
            <input
              style={{ position: 'absolute', background: '#A3D0E5' }}
              className="slider"
              type="range"
              min={1}
              max={99}
              step={1}
              defaultValue={50}
              id="noise"
            />
          </div>
          <div style={{ width: '660px', height: '20px' }} />
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n\nhtml { font-family: sans-serif; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; }\nbody { margin: 0; }\n\nbutton, input, optgroup, select, textarea { color: inherit; font: inherit; margin: 0; }\nbutton { overflow: visible; }\nbutton, select { text-transform: none; }\n\nselect {width: 300px;}\n\nbutton, html input[type="button"],\ninput[type="reset"],\ninput[type="submit"] { -webkit-appearance: button; cursor: pointer; }\n\nbutton[disabled], html input[disabled] { cursor: default; }\n\n.container { position: relative; width: 100%; margin: 0 auto; padding: 0 5px; }\n.column,\n.columns { width: 100%; float: left; box-sizing: border-box; padding: 10px;}\n\nhtml { font-size: 62.5%; }\nbody {\n  font-size: 1.5em; line-height: 0.5; font-weight: 400;\n  font-family: "Sanchez", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  background-color: #fff; \n  color:#357 }\n\nh1, h2, h3, h4, h5, h6 { margin-top: 0; margin-bottom: 1rem; font-weight: 300; }\nh1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem; }\nh2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }\nh3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }\nh4 { font-size: 3.0rem; line-height: 1.35; letter-spacing: -.0rem; }\nh5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }\nh6 { font-size: 1.5rem; line-height: 1.0;  letter-spacing: 0; color: #000; }\nh9 { font-size: 1.4rem; line-height: 2.0;  letter-spacing: 0.05rem; }\n\n.message { font-size: 1.5rem;  letter-spacing: -.05rem; color: #000;}\n\n/* content img url from knobscreative.com */\n.message::after {\n    content: url("https://images.squarespace-cdn.com/content/v1/5e9498ff28a31c410e4cc1bd/1586998406860-VGMK7ROFH63O453A8XZ3/ke17ZwdGBToddI8pDm48kLjcMuGWp1lJEmQgvPcfaydZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI3BVWku5osY7VlmAh450lTvj4ug1Vfknv5r1J4VpBE8g/Tight+squiggle.png?format=300w");\n    position: absolute;\n    top: 0;\n    left: 400px;\n    z-index: -1;\n    opacity: 0.4;\n}\n\ncheckbox, .checkbox { margin-bottom: 1rem; color: #000;}\n\n.checkbox, checkbox, select, input[type="checkbox"]\n{\n  display: inline-block; height: 16px; width: 92px; padding: 0 0px;\n  text-align: center; font-size: 11px; font-weight: 600;\n  line-height:  ; letter-spacing: 0rem;\n  text-transform: uppercase; text-decoration: none; white-space: nowrap;\n  background-color: #A3D0E5; color: #000;\n  box-sizing: border-box; border-radius: 5px; border: 1px solid #A3D0E5;\n  cursor: pointer;\n}\n\ninput.checkbox:focus, checkbox:focus,\ninput[type="checkbox"]:focus { color: #000; background-color: #fff; border-color: #999; outline: 0; }\n\ninput.checkbox:disabled, checkbox:disabled,\ninput[type="checkbox"]:disabled { color: #999; background-color: #ededed; border-color: #ededed; outline: 0; }\n\nbutton, .button { margin-bottom: 1rem; color: #000;}\n\n.button, button, select, input[type="button"]\n{\n  display: inline-block; height: 24px; width: 92px; padding: 0 0px;\n  text-align: center; font-size: 11px; font-weight: 600;\n  line-height: 24px; letter-spacing: 0rem;\n  text-transform: uppercase; text-decoration: none; white-space: nowrap;\n  background-color: #A3D0E5; color: #000;\n  box-sizing: border-box; border-radius: 5px; border: 1px solid #A3D0E5;\n  cursor: pointer;\n}\n\ninput.button:hover, button:hover,\ninput[type="button"]:hover { color: #EEE; background-color: #357; border-color: #357; }\n\nselect:hover { color: #EEE; background-color: #357; border-color: #357; }\n\ninput.button:focus, button:focus,\ninput[type="button"]:focus { color: #000; background-color: #fff; border-color: #999; outline: 0; }\n\ninput.button:disabled, button:disabled,\ninput[type="button"]:disabled { color: #999; background-color: #ededed; border-color: #ededed; outline: 0; }\n\ninput.select:disabled, select:disabled,\ninput[type="select"]:disabled { color: #999; background-color: #ededed; border-color: #ededed; outline: 0; }\n\ninput.slider {\n    display:flex; align-items:center; justify-content:left;\n    -webkit-appearance: none; -webkit-transition: .2s;\n    width: 645px; height: 24px; outline: none;\n    border-radius: 3px; border: 1px solid #fff;\n    opacity: 0.5; transition: opacity .2s; padding: 1px;\n    pointer-events: none;\n}\ninput.slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none; opacity: 0.8; \n    width:48px; height:22px;\n    border-radius: 3px; border: 1px solid #FFF;\n    background: #124;\n    cursor: pointer; pointer-events: auto;\n}\ninput.slider::-webkit-slider-thumb:active { background-color: #124; border-color: #111; opacity: 1.0; } {}\ninput.slider::-webkit-slider-thumb:hover { background-color: #124; border-color: #111; opacity: 1.0; } {}\n\ninput.checkbox:hover, checkbox:hover,\ninput[type="checkbox"]:hover { color: #EEE; background-color: #357; border-color: #357; }\n\nselect:hover { color: #EEE; background-color: #357; border-color: #357; }\n\n',
          }}
        />
      </div>
    </div>
  );
};

export default Interface;
