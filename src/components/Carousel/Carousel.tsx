import React, { useState } from 'react';

import './Carousel.scss';

type Props = {
  images: string[];
  itemWidth: number;
  step: number,
  frameSize: number,
  animationDuration: string,
};

export const Carousel: React.FC<Props> = ({
  images,
  itemWidth,
  step,
  frameSize,
  animationDuration,
}) => {
  const [shift, setShift] = useState(0);
  const lastPosition = -itemWidth * (images.length - frameSize);
  const firstPosition = 0;

  function moveLeft() {
    let nextShift = shift - (itemWidth * step);

    if (lastPosition > nextShift) {
      nextShift = lastPosition;
    }

    setShift(nextShift);
  }

  function moveRight() {
    let nextShift = shift + (itemWidth * step);

    if (firstPosition < nextShift) {
      nextShift = firstPosition;
    }

    setShift(nextShift);
  }

  return (
    <div className="Carousel">
      <div
        className="Carousel__wrapper"
        style={{ width: `${frameSize * itemWidth}px` }}
      >
        <ul
          className="Carousel__list"
          style={{
            transform: `translateX(${shift}px)`,
            transitionDuration: `${animationDuration}ms`,
          }}
        >
          {images.map((el, i) => (
            <li key={el}>
              <img
                src={el}
                alt={String(i)}
                style={{
                  width: `${itemWidth}px`,
                  height: `${itemWidth}px`,
                }}
              />
            </li>
          ))}
        </ul>
      </div>

      <button
        className="Carousel__btn"
        type="button"
        onClick={() => moveLeft()}
        disabled={shift === lastPosition}
      >
        Prev
      </button>

      <button
        className="Carousel__btn"
        type="button"
        disabled={shift === 0}
        onClick={() => moveRight()}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
