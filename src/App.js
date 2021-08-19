import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div
      className="view-container"
      onClick={() => {
        setCounter(counter => counter + 1);
      }}
      onMouseDown={e => {
        // to prevent double clicking text selection
        e.preventDefault();
      }}
    >
      <div className="element-container">
        <div className="panel-container">
          {counter
            .toString()
            .split('')
            .map((digit, index) => (
              <div key={index} className="digit-container">
                {/* fixed width font */}
                <tt>{digit}</tt>
              </div>
            ))}
        </div>
        <button
          className="reset-button"
          onClick={e => {
            e.stopPropagation();
            setCounter(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
