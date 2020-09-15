import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const imgUrls = [
  'https://cdn.pixabay.com/photo/2020/04/21/06/41/bulldog-5071407__340.jpg',
  'https://cdn.pixabay.com/photo/2020/06/16/09/16/blooming-field-5304878__340.jpg',
  'https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906__340.jpg',
];

const items = [
  {
    src: imgUrls[0],
    altText: 'Slide 1',
    caption: 'bulldogs',
  },
  {
    src: imgUrls[1],
    altText: 'Slide 2',
    caption: 'blooming field',
  },
  {
    src: imgUrls[2],
    altText: 'Slide 3',
    caption: 'camping in nice sky',
  },
];

export default function FeaturedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="img-fluid" src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous} interval="2500" enableTouch>
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}
