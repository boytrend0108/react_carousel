import { useState } from 'react';

import { Settings } from './components/Settings';
import { Carousel } from './components/Carousel';

const images = [
  './img/1.png',
  './img/2.png',
  './img/3.png',
  './img/4.png',
  './img/5.png',
  './img/6.png',
  './img/7.png',
  './img/8.png',
  './img/9.png',
  './img/10.png',
];

export const App = () => {
  const [itemWidth, setItemWidth] = useState(130);
  const [step, setStep] = useState(1);
  const [frameSize, setFrameSize] = useState(3);
  const [animationDuration, setAnimationDuration] = useState('500');
  const [infinite, setInfinite] = useState('false');
  const [carusel, setCarusel] = useState([...images]);
  const [shift, setShift] = useState(0);

  return (
    <div className="App">
      <h1 data-cy="title">{`Carousel with ${images.length} images`}</h1>

      <Settings
        setItemWidth={width => setItemWidth(width)}
        itemWidth={itemWidth}
        step={step}
        setStep={newStep => setStep(newStep)}
        frameSize={frameSize}
        setFrameSize={newSize => setFrameSize(newSize)}
        animationDuration={animationDuration}
        setAnimationDuration={setAnimationDuration}
        infinite={infinite}
        setInfinite={value => {
          setInfinite(value);
          if (value === 'false') {
            setCarusel(images);
            setShift(0);
          }
        }}
      />

      <Carousel
        images={carusel}
        itemWidth={itemWidth}
        step={step}
        frameSize={frameSize}
        animationDuration={animationDuration}
        infinite={infinite}
        shift={shift}
        setShift={setShift}
      />
    </div>
  );
};
