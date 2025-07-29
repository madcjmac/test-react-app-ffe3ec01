import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    alert('Button clicked! 🎉');
  };

  return (
    <div className="app-container">
      <button className="click-button" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

export default App;