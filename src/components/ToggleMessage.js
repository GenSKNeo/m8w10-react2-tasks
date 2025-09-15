// Task 1: Component to toggle message visibility
import { useState } from "react";
function ToggleMessage() {
  // State to track if message should be shown (false by default)
  const [show, setShow] = useState(false);

  return (
    <div className="card">
      <h2>Task 1: Toggle Message</h2>
      {/* Button to toggle show state between true and false */}
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Message" : "Show Message"} {/* Improved button text */}
      </button>
      {/* Conditionally render message if show is true */}
      {show && <p>Hello, welcome to React!</p>}
    </div>
  );
}

export default ToggleMessage;