// @ts-nocheck
import React from 'react';
import { LI } from './styles';

const isElementVisible = el => {
  const rect = el.getBoundingClientRect(),
    vWidth = window.innerWidth || document.documentElement.clientWidth,
    vHeight = window.innerHeight || document.documentElement.clientHeight,
    efp = function (x, y) {
      return document.elementFromPoint(x, y);
    };

  // Return false if it's not in the viewport
  if (
    rect.right < 0 ||
    rect.bottom < 0 ||
    rect.left > vWidth ||
    rect.top > vHeight
  )
    return false;

  // Return true if any of its four corners are visible
  return (
    el.contains(efp(rect.left, rect.top)) ||
    el.contains(efp(rect.right, rect.top)) ||
    el.contains(efp(rect.right, rect.bottom)) ||
    el.contains(efp(rect.left, rect.bottom))
  );
};
const Item = ({ title, focus, id, setFocus, setShiftIndex, shiftIndex }) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (focus && isElementVisible(ref.current)) {
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
