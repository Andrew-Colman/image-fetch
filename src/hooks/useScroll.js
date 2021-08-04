import React from 'react';

export default function useScroll() {
  const scrollToRef = (ref, offset) =>
    window.scrollTo({
      top: ref.current.offsetTop + offset,
      left: 0,
      behavior: 'smooth',
    });

  const goTo = (offset) => {
    window.scrollBy({
      top: window.innerHeight - offset,
      left: 0,
      behavior: 'smooth',
    });
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return { scrollToRef, goTo, scrollTop };
}
