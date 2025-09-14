import React, { useState } from 'react';
import './ToggleMessage.css';

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="card">
      <h2>Task 1: Event Handling</h2>
      <button className="btn-primary" onClick={toggleVisibility}>
        Toggle Message
      </button>
      {isVisible && (
        <p className="fade-in message-text">
          Hello, welcome to React!
        </p>
      )}
    </div>
  );
};

export default ToggleMessage;