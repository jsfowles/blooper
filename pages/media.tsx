import React from 'react';

import Video from '@components/Video';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { parentEl } from '@identity/motion';
import Loader from '@components/Loader';

const Grid = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 53px;
  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Media = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <AnimatePresence>
      {!loading && (
        <Grid
          style={{ padding: '7vw' }}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={parentEl(0.2, 0)}
        >
          <Video url="https://www.youtube.com/watch?v=DwFSoN-zTmA" />
          <Video url="https://www.youtube.com/watch?v=QoUNwYXcONU" />
          <Video url="https://www.youtube.com/watch?v=5EyWTklA9yo" />
          <Video url="https://www.youtube.com/watch?v=c6RjL-LETRE&t=9s" />
          <Video url="https://www.youtube.com/watch?v=mXqXs7UVFfc" />
          <Video url="https://www.youtube.com/watch?v=cimncrCGStE" />
          <Video url="https://www.youtube.com/watch?v=DhqZwIHPCH0" />
          <Video url="https://www.youtube.com/watch?v=5rDTpY9TPKE" />
          <Video url="https://www.youtube.com/watch?v=oCE_CVlMqPQ" />
          <Video url="https://www.youtube.com/watch?v=Uj29o74tNt4" />
          <Video url="https://www.youtube.com/watch?v=xmFXhhS-ueg" />
          <Video url="https://www.youtube.com/watch?v=C5zCqhssK1c" />
        </Grid>
      )}
    </AnimatePresence>
  );
};

export default Media;
