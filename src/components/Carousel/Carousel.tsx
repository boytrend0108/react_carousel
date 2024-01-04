import './Carousel.scss';

type Props = {
  images: string[];
  itemWidth: number;
  step: number,
  frameSize: number,
  animationDuration: string,
  infinite: boolean,
  shift: number,
  setShift: (value: number) => void,
};

let i = 0;

export const Carousel: React.FC<Props> = ({
  images,
  itemWidth,
  step,
  frameSize,
  animationDuration,
  infinite,
  shift,
  setShift,
}) => {
  const lastPosition = -itemWidth * (images.length - frameSize);
  const firstPosition = 0;

  function moveLeft() {
    let nextShift = shift - (itemWidth * step);

    i = (i % (images.length - 1)) + 1;

    if (infinite) {
      const loop = [...images].splice(i - 1, step);

      images.unshift();

      images.push(...loop);
    } else if (lastPosition > nextShift) {
      nextShift = lastPosition;
    }

    setShift(nextShift);
  }

  function moveRight() {
    let nextShift = shift + (itemWidth * step);

    i = (i % (images.length - 1)) + 1;

    if (infinite && shift === 0) {
      setShift(-1040);

      return;
    }

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
          {images.map(el => (
            <li key={Math.random()}>
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
        disabled={shift === lastPosition && !infinite}
      >
        Prev
      </button>

      <button
        className="Carousel__btn"
        type="button"
        disabled={shift === 0 && !infinite}
        onClick={() => moveRight()}
        data-cy="next"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
