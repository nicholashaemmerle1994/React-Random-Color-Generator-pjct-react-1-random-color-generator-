import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('');
  console.log('outside', backgroundColor);
  return (
    <>
      <div>
        <h1>Random Color Generator</h1>
        <div
          style={{
            height: '600px',
            width: '600px',
            backgroundColor: backgroundColor,
          }}
        >
          Generated Color: {backgroundColor}
        </div>
        <button
          onClick={() => {
            setBackgroundColor(randomColor());
            console.log('inside', backgroundColor);
          }}
        >
          Generate
        </button>
      </div>
    </>
  );
}
