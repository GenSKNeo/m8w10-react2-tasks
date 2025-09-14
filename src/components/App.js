import React from 'react';
import Header from './components/Header/Header';
import ToggleMessage from './components/Task1/ToggleMessage';
import ColorChanger from './components/Task2/ColorChanger';
import UserProfile from './components/Task3/UserProfile';
import './styles/global.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <div className="cards-container">
        <ToggleMessage />
        <ColorChanger />
        <UserProfile />
      </div>
    </div>
  );
}

export default App;