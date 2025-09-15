// Task 2: Component to change color of a box
import { useState } from "react";
function ColorChanger() {
  // State to store the current color value
  const [color, setColor] = useState("lightgray");

  return (
    <div className="card">
      <h2>Task 2: Color Changer</h2>
      {/* Input field to change the color */}
      <input
        type="text"
        placeholder="Enter a color name or hex code"
        value={color}
        onChange={(e) => setColor(e.target.value)} // Update color state on change
      />
      {/* Display box with the selected color */}
      <div className="color-box" style={{ backgroundColor: color }}>
        {/* Show color value inside box for better UX */}
        <span className="color-text">{color}</span>
      </div>
    </div>
  );
}

export default ColorChanger;
