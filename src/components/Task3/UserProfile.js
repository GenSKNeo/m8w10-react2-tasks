import React, { useState, useEffect } from 'react';
import asianUsers from "../../data/asianUsers";
import './UserProfile.css';

const UserProfile = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUserId, setSelectedUserId] = useState(1);

  // Simulate API fetch with Asian data
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setUsers(asianUsers);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleUserChange = (event) => {
    setSelectedUserId(parseInt(event.target.value));
  };

  const selectedUser = users.find(user => user.id === selectedUserId);

  return (
    <div className="card">
      <h2>Task 3: Data Fetching (Asian Data)</h2>
      
      {loading ? (
        <div className="loading">Loading user data...</div>
      ) : (
        <>
          <div className="user-selector">
            <label htmlFor="user-select">Select a user: </label>
            <select 
              id="user-select"
              value={selectedUserId} 
              onChange={handleUserChange}
              className="user-dropdown"
            >
              {users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name} ({user.address.city})
                </option>
              ))}
            </select>
          </div>
          
          {selectedUser && (
            <div className="user-profile fade-in">
              <div className="profile-header">
                <img 
                  src={selectedUser.image} 
                  alt={selectedUser.name}
                  className="profile-image"
                />
                <h3>{selectedUser.name}</h3>
                <p className="user-location">{selectedUser.address.city}</p>
              </div>
              <div className="profile-details">
                <p><strong>Username:</strong> {selectedUser.username}</p>
                <p><strong>Email:</strong> {selectedUser.email}</p>
                <p><strong>Phone:</strong> {selectedUser.phone}</p>
                <p><strong>Website:</strong> {selectedUser.website}</p>
                <p><strong>Company:</strong> {selectedUser.company.name}</p>
                <p><strong>Address:</strong> {selectedUser.address.street}, {selectedUser.address.city}</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UserProfile;