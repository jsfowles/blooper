// @ts-nocheck
import React from 'react';
import TextBlock from '@components/TextBlock';

const Interface = () => {
  return (
    <div
      id="main"
      style={{
        padding: '0 7vw',
        margin: '0 auto',
        width: 'max-content',
      }}
    >
      <TextBlock title="interface" />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '645px',
          alignItems: 'flex-end',
        }}
      >
        <h4 id="title">Chase Bliss Blooper</h4>
        <h5 id="message" className="message" />
      </div>
      <div
        style={{ width: '645px', height: '2px', backgroundColor: '#A3D0E5' }}
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
          <h5>Firmware v2.0</h5>
        </div>
      </div>
      <div
        style={{ width: '645px', height: '2px', backgroundColor: '#A3D0E5' }}
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
        <h5>Export Session to Wave File</h5>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }} id="save">
        <div style={{ display: 'flex', flexDirection: 'row', height: '28px' }}>
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
            }}
          >
            <button disabled id="dnload_1_8">
              Layer 8
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', height: '28px' }}>
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
            }}
          >
            <button disabled id="dnload_2_8">
              Layer 8
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', height: '28px' }}>
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
            }}
          >
            <button disabled id="dnload_3_8">
              Layer 8
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', height: '28px' }}>
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
            }}
          >
            <button disabled id="dnload_4_8">
              Layer 8
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', height: '28px' }}>
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
            }}
          >
            <button disabled id="dnload_5_8">
              Layer 8
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', height: '28px' }}>
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
            }}
          >
            <button disabled id="dnload_6_8">
              Layer 8
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', height: '28px' }}>
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
            }}
          >
            <button disabled id="dnload_7_8">
              Layer 8
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', height: '28px' }}>
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
            }}
          >
            <button disabled id="dnload_8_8">
              Layer 8
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', height: '28px' }}>
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
            }}
          >
            <button disabled id="dnload_9_8">
              Layer 8
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', height: '28px' }}>
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
            }}
          >
            <button disabled id="dnload_10_8">
              Layer 8
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', height: '28px' }}>
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
            }}
          >
            <button disabled id="dnload_11_8">
              Layer 8
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', height: '28px' }}>
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
            }}
          >
            <button disabled id="dnload_12_8">
              Layer 8
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', height: '28px' }}>
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
            }}
          >
            <button disabled id="dnload_13_8">
              Layer 8
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', height: '28px' }}>
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
            }}
          >
            <button disabled id="dnload_14_8">
              Layer 8
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', height: '28px' }}>
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
            }}
          >
            <button disabled id="dnload_15_8">
              Layer 8
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', height: '28px' }}>
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
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
              width: '59px',
            }}
          >
            <button disabled id="dnload_16_8">
              Layer 8
            </button>
          </div>
        </div>
      </div>
      <div style={{ width: '660px', height: '10px' }} />
      <div
        style={{ width: '645px', height: '2px', backgroundColor: '#A3D0E5' }}
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
      <div style={{ width: '660px', height: '10px' }} />
      <div style={{ display: 'flex', flexDirection: 'row', height: '20px' }}>
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
            <option value={0}>Default</option>
            <option value={1}>Dropper</option>
            <option value={2}>Scrambler</option>
            <option value={3}>Smooth Trimmer</option>
            <option value={4}>Stepped Trimmer</option>
            <option value={5}>Filter</option>
            <option value={6}>Smooth Speed</option>
            <option value={7}>Stepped Speed</option>
            <option value={8}>Swapper</option>
            <option value={9}>Smooth Stutter</option>
            <option value={10}>Stepped Stutter</option>
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
            <option value={0}>Default</option>
            <option value={1}>Dropper</option>
            <option value={2}>Scrambler</option>
            <option value={3}>Smooth Trimmer</option>
            <option value={4}>Stepped Trimmer</option>
            <option value={5}>Filter</option>
            <option value={6}>Smooth Speed</option>
            <option value={7}>Stepped Speed</option>
            <option value={8}>Swapper</option>
            <option value={9}>Smooth Stutter</option>
            <option value={10}>Stepped Stutter</option>
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
            <option value={0}>Default</option>
            <option value={1}>Dropper</option>
            <option value={2}>Scrambler</option>
            <option value={3}>Smooth Trimmer</option>
            <option value={4}>Stepped Trimmer</option>
            <option value={5}>Filter</option>
            <option value={6}>Smooth Speed</option>
            <option value={7}>Stepped Speed</option>
            <option value={8}>Swapper</option>
            <option value={9}>Smooth Stutter</option>
            <option value={10}>Stepped Stutter</option>
          </select>
        </div>
      </div>
      <div style={{ width: '660px', height: '10px' }} />
      <div style={{ display: 'flex', flexDirection: 'row', height: '20px' }}>
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
            <option value={0}>Default</option>
            <option value={1}>Dropper</option>
            <option value={2}>Scrambler</option>
            <option value={3}>Smooth Trimmer</option>
            <option value={4}>Stepped Trimmer</option>
            <option value={5}>Filter</option>
            <option value={6}>Smooth Speed</option>
            <option value={7}>Stepped Speed</option>
            <option value={8}>Swapper</option>
            <option value={9}>Smooth Stutter</option>
            <option value={10}>Stepped Stutter</option>
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
            <option value={0}>Default</option>
            <option value={1}>Dropper</option>
            <option value={2}>Scrambler</option>
            <option value={3}>Smooth Trimmer</option>
            <option value={4}>Stepped Trimmer</option>
            <option value={5}>Filter</option>
            <option value={6}>Smooth Speed</option>
            <option value={7}>Stepped Speed</option>
            <option value={8}>Swapper</option>
            <option value={9}>Smooth Stutter</option>
            <option value={10}>Stepped Stutter</option>
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
            <option value={0}>Default</option>
            <option value={1}>Dropper</option>
            <option value={2}>Scrambler</option>
            <option value={3}>Smooth Trimmer</option>
            <option value={4}>Stepped Trimmer</option>
            <option value={5}>Filter</option>
            <option value={6}>Smooth Speed</option>
            <option value={7}>Stepped Speed</option>
            <option value={8}>Swapper</option>
            <option value={9}>Smooth Stutter</option>
            <option value={10}>Stepped Stutter</option>
          </select>
        </div>
      </div>
      <div style={{ width: '660px', height: '10px' }} />
      <div style={{ display: 'flex', flexDirection: 'row', height: '20px' }}>
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
            <option value={0}>Default</option>
            <option value={1}>Dropper</option>
            <option value={2}>Scrambler</option>
            <option value={3}>Smooth Trimmer</option>
            <option value={4}>Stepped Trimmer</option>
            <option value={5}>Filter</option>
            <option value={6}>Smooth Speed</option>
            <option value={7}>Stepped Speed</option>
            <option value={8}>Swapper</option>
            <option value={9}>Smooth Stutter</option>
            <option value={10}>Stepped Stutter</option>
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
            <option value={0}>Default</option>
            <option value={1}>Dropper</option>
            <option value={2}>Scrambler</option>
            <option value={3}>Smooth Trimmer</option>
            <option value={4}>Stepped Trimmer</option>
            <option value={5}>Filter</option>
            <option value={6}>Smooth Speed</option>
            <option value={7}>Stepped Speed</option>
            <option value={8}>Swapper</option>
            <option value={9}>Smooth Stutter</option>
            <option value={10}>Stepped Stutter</option>
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
            <option value={0}>Default</option>
            <option value={1}>Dropper</option>
            <option value={2}>Scrambler</option>
            <option value={3}>Smooth Trimmer</option>
            <option value={4}>Stepped Trimmer</option>
            <option value={5}>Filter</option>
            <option value={6}>Smooth Speed</option>
            <option value={7}>Stepped Speed</option>
            <option value={8}>Swapper</option>
            <option value={9}>Smooth Stutter</option>
            <option value={10}>Stepped Stutter</option>
          </select>
        </div>
      </div>
      <div style={{ width: '660px', height: '10px' }} />
      <div style={{ display: 'flex', flexDirection: 'row', height: '20px' }}>
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
            <option value={0}>Default</option>
            <option value={1}>Dropper</option>
            <option value={2}>Scrambler</option>
            <option value={3}>Smooth Trimmer</option>
            <option value={4}>Stepped Trimmer</option>
            <option value={5}>Filter</option>
            <option value={6}>Smooth Speed</option>
            <option value={7}>Stepped Speed</option>
            <option value={8}>Swapper</option>
            <option value={9}>Smooth Stutter</option>
            <option value={10}>Stepped Stutter</option>
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
            <option value={0}>Default</option>
            <option value={1}>Dropper</option>
            <option value={2}>Scrambler</option>
            <option value={3}>Smooth Trimmer</option>
            <option value={4}>Stepped Trimmer</option>
            <option value={5}>Filter</option>
            <option value={6}>Smooth Speed</option>
            <option value={7}>Stepped Speed</option>
            <option value={8}>Swapper</option>
            <option value={9}>Smooth Stutter</option>
            <option value={10}>Stepped Stutter</option>
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
            <option value={0}>Default</option>
            <option value={1}>Dropper</option>
            <option value={2}>Scrambler</option>
            <option value={3}>Smooth Trimmer</option>
            <option value={4}>Stepped Trimmer</option>
            <option value={5}>Filter</option>
            <option value={6}>Smooth Speed</option>
            <option value={7}>Stepped Speed</option>
            <option value={8}>Swapper</option>
            <option value={9}>Smooth Stutter</option>
            <option value={10}>Stepped Stutter</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Interface;
