import React from 'react';
import { useLoading, Audio } from '@agney/react-loading';

const Loader = () => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Audio width="25vw" color="#a8d1e4" />,
  });

  return (
    <section
      style={{
        paddingTop: '7vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '60%',
        textAlign: 'center',
      }}
      {...containerProps}
    >
      {indicatorEl}
      <br /> <br />
      HOLD YOUR HORSES.
      <br />
      <br />
      RETRIEVING A BUNCH OF DATA.
    </section>
  );
};

export default Loader;
