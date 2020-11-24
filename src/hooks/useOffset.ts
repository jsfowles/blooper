import * as React from 'react';

export const useOffset = (): number => {
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  return offset;
};

export default useOffset;
