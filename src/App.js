import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState(randomColor());
  const [chosenHeight, setChosenHeight] = useState('');
  const [chosenWidth, setChosenWidth] = useState('');

  return (
    <>
      <div>
        <h1>Random Color Generator</h1>
        <div
          style={{
            border: 'solid 5px',
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
        <br />
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
            type="text"
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
            type="text"
          />
        </label>
      </div>
    </>
  );
}
