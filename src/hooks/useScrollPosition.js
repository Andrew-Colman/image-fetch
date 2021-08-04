import { useState, useEffect, useMemo } from 'react';

const throttle = require('lodash/throttle');

/**
 * calculates if Scroll Position past the bounds of pageYOffset
 * @returns {boolean} scrolled past offset
 */
const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(false);

  const calculateMousePosition = (ev) => {
    const h = window.screen.height; // (device height)

    const pageYoffset = window.pageYOffset;

    const offset = h / 5;

    if (pageYoffset > h - offset) {
      setScrollPosition(true);
    } else if (pageYoffset < h - offset) {
      setScrollPosition(false);
    }
  };

  const throttledEventHandler = useMemo(() => throttle(calculateMousePosition, 500), []);

  useEffect(() => {
    window.addEventListener('scroll', throttledEventHandler);

    return () => window.removeEventListener('scroll', throttledEventHandler);
  }, [throttledEventHandler]);

  return scrollPosition;
};

export default useScrollPosition;
