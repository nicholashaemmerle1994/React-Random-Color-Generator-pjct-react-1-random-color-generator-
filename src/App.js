import randomColor from 'randomcolor';
import { useState } from 'react';

// import tachyons from 'tachyons';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState(randomColor());
  const [chosenHeight, setChosenHeight] = useState('250');
  const [chosenWidth, setChosenWidth] = useState('250');

  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <h1>Random Color Generator</h1>
      <div
        style={{
          borderRadius: '10%',
          display: 'inline-block',
          textAlign: 'center',
          border: 'solid 5px black',
          height: `${chosenHeight}px`,
          width: `${chosenWidth}px`,
          backgroundColor: backgroundColor,
          transition: 'all .5s ease',
          WebkitTransition: 'all .5s ease',
          MozTransition: 'all .5s ease',
        }}
      >
        Generated Color: {backgroundColor}
      </div>
      <br /> <br />
      <button
        onClick={() => {
          setBackgroundColor(randomColor());
        }}
      >
        Generate
      </button>
      <br /> <br />
      <label htmlFor="height">
        Height:
        <input
          value={chosenHeight}
          onChange={(event) => {
            setChosenHeight(event.currentTarget.value);
          }}
          className="height"
        />
      </label>
      <br /> <br />
      <label htmlFor="width">
        Width:
        <input
          value={chosenWidth}
          onChange={(event) => {
            setChosenWidth(event.currentTarget.value);
          }}
          className="width"
        />
      </label>
    </div>
  );
}
