import React, { useState } from 'react';
import './ColorChanger.css';

const ColorChanger = () => {
  const [color, setColor] = useState('#f0f0f0');

  const handleInputChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="card">
      <h2>Task 2: State Management</h2>
      <input
        type="text"
        value={color}
        onChange={handleInputChange}
        placeholder="Enter a color name or hex code"
        className="color-input"
      />
      <div className="color-box-container">
        <div
          className="color-box"
          style={{ backgroundColor: color }}
        ></div>
        <p>Current color: {color}</p>
      </div>
    </div>
  );
};

export default ColorChanger;