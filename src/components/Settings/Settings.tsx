/* eslint-disable react/button-has-type */
import './Settings.scss';

type Props = {
  itemWidth: number
  setItemWidth: (value: number) => void,
  step: number;
  setStep: (value: number) => void;
  frameSize: number,
  setFrameSize: (value: number) => void;
  animationDuration: string,
  setAnimationDurarion: (value: string) => void
};

export const Settings: React.FC<Props> = ({
  itemWidth,
  setItemWidth,
  step,
  setStep,
  frameSize,
  setFrameSize,
  animationDuration,
  setAnimationDurarion,
}) => {
  function setWidthForImage(size: number) {
    switch (true) {
      case size > 300:
        setItemWidth(300);
        break;

      default:
        setItemWidth(size);
    }
  }

  return (
    <form className="settings">
      <label
        htmlFor="itemWidth"
        className="settings__label"
      >
        <input
          type="text"
          className="settings__item"
          id="itemWidth"
          value={itemWidth}
          onChange={event => setWidthForImage(+event.target.value)}
        />
        Item Width
      </label>

      <label
        htmlFor="Step"
        className="settings__label"
      >
        <input
          type="number"
          className="settings__item"
          id="Step"
          min="1"
          max="5"
          value={step}
          onChange={event => setStep(+event.target.value)}
        />
        Step
      </label>

      <label
        htmlFor="Frame Size"
        className="settings__label"
      >
        <input
          type="number"
          className="settings__item"
          id="Frame Size"
          min="1"
          max="5"
          value={frameSize}
          onChange={event => setFrameSize(+event.target.value)}
        />
        Frame Size
      </label>

      <label
        htmlFor="Duration"
        className="settings__label"
      >
        <input
          type="number"
          className="settings__item"
          id="Duration"
          value={animationDuration}
          min="0"
          max="2000"
          onChange={event => setAnimationDurarion(event.target.value)}
        />

        Animation Duration
      </label>

      {/* <label
        htmlFor="Infinite"
        className="settings__label settings__label--checkbox"
      >
        <input
          type="checkbox"
          className="settings__item settings__item--checkbox"
          id="Infinite"
        />
        Infinite
      </label> */}

      <button
        type="reset"
        className="settings__btn"
      >
        Reset
      </button>
    </form>
  );
};
