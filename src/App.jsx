import ToggleMessage from "./components/ToggleMessage";
import ColorChanger  from "./components/ColorChanger";
import UserProfiles from "./components/UserProfiles";
import "./App.css";

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