// @ts-nocheck
import React from 'react';

import { Header, Bloop, StoriesWrapper, Figure, Box } from './styles';
import useArrowKeyFocus from './../../hooks/useArrowKeyFocus';
import Item from './Items';
import BloopTroop from '../BloopTroop';

const DATA = [
  { id: 0, title: 'Smooth Speed', troopCard: <BloopTroop.SmoothBloop /> },
  { id: 1, title: 'Dropper', troopCard: <BloopTroop.DropperBloop /> },
  { id: 2, title: 'Stepped Speed', troopCard: <BloopTroop.SteppedBloop /> },
  { id: 3, title: 'Scrambler', troopCard: <BloopTroop.ScramblerBloop /> },
  { id: 4, title: 'Trimmer', troopCard: <BloopTroop.TrimmerBloop /> },
  { id: 5, title: 'Filter', troopCard: <BloopTroop.FilterBloop /> },
];

const TroopCarousel = () => {
  const [shiftIndex, setShiftIndex] = React.useState(0);
  const [focus, setFocus] = useArrowKeyFocus(DATA.length);

  return (
    <>
      <Header>Better Bloops</Header>
      <StoriesWrapper>
        <Box>
          {DATA.map(({ id, title, troopCard }) => (
            <>
              <Bloop key={id}>
                <Item
                  key={title}
                  shiftIndex={shiftIndex}
                  setShiftIndex={setShiftIndex}
                  setFocus={setFocus}
                  id={id}
                  focus={focus === id}
                  title={title}
                />
              </Bloop>
            </>
          ))}
        </Box>

        <Box>
          {DATA.map(({ id, title, troopCard }) => (
            <Figure>{shiftIndex === id && troopCard}</Figure>
          ))}
        </Box>
      </StoriesWrapper>
    </>
  );
};

export default TroopCarousel;
