// Import React and necessary hooks
import { useState, useEffect } from "react";
// Import the CSS file for styling
import "./App.css";

// Task 1: Component to toggle message visibility
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

// Task 2: Component to change color of a box
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

// Task 3: Component to display user profiles from API
function UserProfiles() {
  // State to store user data array
  const [users, setUsers] = useState([]);
  // State to track if data is loading
  const [loading, setLoading] = useState(true);
  // State to track current user index
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to track any errors in fetching data
  const [error, setError] = useState(null);

  // useEffect hook to fetch data when component mounts
  useEffect(() => {
    // Async function to fetch user data
    const fetchUsers = async () => {
      try {
        // Fetch data from API
        const response = await fetch("https://jsonplaceholder.typicode.com/users?_limit=7");
        // Check if response is successful
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        // Convert response to JSON
        const data = await response.json();
        // Update users state with fetched data
        setUsers(data);
      } catch (err) {
        // Set error state if something goes wrong
        setError(err.message);
      } finally {
        // Set loading to false regardless of success or failure
        setLoading(false);
      }
    };

    // Call the fetch function
    fetchUsers();
  }, []); // Empty dependency array means this runs once on mount

  // Function to handle next button click
  const handleNext = () => {
    // Update index, looping back to 0 when reaching the end
    setCurrentIndex((prev) => (prev + 1) % users.length);
  };

  return (
    <div className="card user-profiles">
      <h2>Task 3: User Profiles</h2>
      
      {/* Show loading message while data is being fetched */}
      {loading && <p className="loading">Loading user data...</p>}
      
      {/* Show error message if there's an error */}
      {error && <p className="error">Error: {error}</p>}
      
      {/* Show user data when available and no error */}
      {!loading && !error && users.length > 0 && (
        <div className="fade-in">
          <div className="user-card">
            <p><strong>Name:</strong> {users[currentIndex].name}</p>
            <p><strong>Email:</strong> {users[currentIndex].email}</p>
            <p><strong>Address:</strong> {users[currentIndex].address.street},{" "}
              {users[currentIndex].address.city}</p>
          </div>

          {/* Button to show next user */}
          <button onClick={handleNext} className="next-btn">
            Next User ({currentIndex + 1}/{users.length}) {/* Show current position */}
          </button>
        </div>
      )}
      
      {/* Message when no users are available */}
      {!loading && !error && users.length === 0 && (
        <p>No users found.</p>
      )}
    </div>
  );
}

// Main App component that renders all tasks
function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Module 8 Week 10 React 2 Tasks</h1>
        <p>Interactive Components with Events, State, and Data Fetching</p>
      </header>
      <div className="cards-container">
        {/* Render all three task components */}
        <ToggleMessage />
        <ColorChanger />
        <UserProfiles />
      </div>
    </div>
  );
}

// Export App component as default
export default App;