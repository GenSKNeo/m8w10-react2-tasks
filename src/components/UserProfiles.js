// Task 3: Component to display user profiles from API
import { useState, useEffect } from "react";
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

export default UserProfiles;