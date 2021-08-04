import { useState, useEffect, useMemo } from 'react';

const throttle = require('lodash/throttle');

/**
 * calculates if Mouse Position is near center of screen
 * @returns {boolean} mouse position is in center radius
 */
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState(false);

  const calculateMousePosition = (ev) => {
    const x = ev.pageX; //mouse x in page
    const y = ev.pageY; //mouse y in page

    const w = window.screen.width; // (device width)
    const h = window.screen.height; // (device height)

    const radius = 200; //offset from center radius
    const threshold = 1;

    const screenCenter = {
      w: w / 2,
      h: h / 2,
    };

    const centered = {
      w: Math.abs(x - screenCenter.w) / radius,
      h: Math.abs(y - screenCenter.h) / radius,
    };

    const pos = centered.w + centered.h < threshold;

    if (ev.pageY < h) {
      setMousePosition(!!pos);
    }
  };

  const throttledEventHandler = useMemo(() => throttle(calculateMousePosition, 500), []);

  useEffect(() => {
    window.addEventListener('mousemove', throttledEventHandler);

    return () => window.removeEventListener('mousemove', throttledEventHandler);
  }, [throttledEventHandler]);

  return mousePosition;
};

export default useMousePosition;
