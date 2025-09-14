// Import necessary React hooks and CSS
import React, { useState, useEffect } from 'react';
import './App.css';

// Task 1: Toggle Message Component
// This component demonstrates event handling in React
function ToggleMessage() {
  // State to track whether the message is visible or not
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle button click and toggle message visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="card">
      <h2>Task 1: Event Handling</h2>
      {/* Button with click event handler */}
      <button className="btn-primary" onClick={toggleVisibility}>
        Toggle Message
      </button>
      {/* Conditionally render message based on isVisible state */}
      {isVisible && (
        <p className="fade-in" style={{ marginTop: '20px' }}>
          Hello, welcome to React!
        </p>
      )}
    </div>
  );
}

// Task 2: Color Changer Component
// This component demonstrates state management with React hooks
function ColorChanger() {
  // State to track the current color value
  const [color, setColor] = useState('#f0f0f0');

  // Function to handle input changes and update color state
  const handleInputChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="card">
      <h2>Task 2: State Management</h2>
      {/* Input field bound to color state with onChange handler */}
      <input
        type="text"
        value={color}
        onChange={handleInputChange}
        placeholder="Enter a color name or hex code"
        className="color-input"
      />
      <div className="color-box-container">
        {/* Color box that changes based on the color state */}
        <div
          className="color-box"
          style={{ backgroundColor: color }}
        ></div>
        {/* Display the current color value */}
        <p>Current color: {color}</p>
      </div>
    </div>
  );
}

// Task 3: User Profile Component
// This component demonstrates asynchronous data fetching with useEffect
function UserProfile() {
  // State to store the list of users
  const [users, setUsers] = useState([]);
  // State to track loading status
  const [loading, setLoading] = useState(true);
  // State to track the currently selected user
  const [selectedUserId, setSelectedUserId] = useState(1);

  // useEffect hook to fetch data when component mounts
  useEffect(() => {
    // Async function to fetch users from API
    const fetchUsers = async () => {
      try {
        setLoading(true); // Set loading to true when starting fetch
        // Fetch user data from JSONPlaceholder API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const userData = await response.json();
        setUsers(userData); // Update users state with fetched data
        setLoading(false); // Set loading to false when done
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false); // Ensure loading is false even on error
      }
    };

    fetchUsers(); // Call the fetch function
  }, []); // Empty dependency array means this runs once on mount

  // Function to handle user selection change
  const handleUserChange = (event) => {
    setSelectedUserId(parseInt(event.target.value));
  };

  // Find the selected user from the users array
  const selectedUser = users.find(user => user.id === selectedUserId);

  return (
    <div className="card">
      <h2>Task 3: Data Fetching</h2>
      
      {/* Show loading message while data is being fetched */}
      {loading ? (
        <div className="loading">Loading user data...</div>
      ) : (
        <>
          <div className="user-selector">
            <label htmlFor="user-select">Select a user: </label>
            {/* Dropdown to select different users */}
            <select 
              id="user-select"
              value={selectedUserId} 
              onChange={handleUserChange}
              className="user-dropdown"
            >
              {/* Map through users to create dropdown options */}
              {users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          
          {/* Display selected user information if available */}
          {selectedUser && (
            <div className="user-profile fade-in">
              <h3>{selectedUser.name}</h3>
              <p><strong>Username:</strong> {selectedUser.username}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Phone:</strong> {selectedUser.phone}</p>
              <p><strong>Website:</strong> {selectedUser.website}</p>
              <p><strong>Company:</strong> {selectedUser.company.name}</p>
              <p><strong>Address:</strong> {selectedUser.address.street}, {selectedUser.address.city}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// Main App Component
// This is the root component that renders all other components
function App() {
  return (
    <div className="App">
      {/* Application header */}
      <header className="app-header">
        <h1>React Learning - Day 5</h1>
        <p>Interactive Components with Events, State, and Data Fetching</p>
      </header>
      
      {/* Container for all task components */}
      <div className="cards-container">
        <ToggleMessage />
        <ColorChanger />
        <UserProfile />
      </div>
    </div>
  );
}

// Export the App component as default
export default App;