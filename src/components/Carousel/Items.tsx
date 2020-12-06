// @ts-nocheck
import React from 'react';
import { LI } from './styles';

const Item = ({ title, focus, id, setFocus, setShiftIndex, shiftIndex }) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (focus) {
      ref.current.focus();
    }
  }, [focus]);

  const handleSelect = React.useCallback(() => {
    setShiftIndex(id);
    setFocus(id);
  }, [title, id, setFocus]);

  return (
    <LI
      hasFocus={focus}
      isActive={shiftIndex === id}
      tabIndex={focus ? 0 : -1}
      role="button"
      ref={ref}
      onClick={handleSelect}
      onKeyPress={handleSelect}
    >
      {title}
    </LI>
  );
};

export default Item;
