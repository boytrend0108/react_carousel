import { useState } from 'react';
import './App.scss';

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

  return (
    <div className="App">
      <h1>{`Carousel with ${images.length} images`}</h1>

      <Settings
        setItemWidth={width => setItemWidth(width)}
        itemWidth={itemWidth}
        step={step}
        setStep={newStep => setStep(newStep)}
        frameSize={frameSize}
        setFrameSize={newSize => setFrameSize(newSize)}
      />

      <Carousel
        images={images}
        itemWidth={itemWidth}
        step={step}
        frameSize={frameSize}
      />
    </div>
  );
};
