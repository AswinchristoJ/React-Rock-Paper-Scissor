import React from 'react';

import PlayArea from './Components/PlayArea/PlayArea';

import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Rock-Paper-Scissor</h3>
      <h2>Score</h2>
      <PlayArea/>
      <h3>UserControls</h3>
    </div>
  );
}

export default App;
