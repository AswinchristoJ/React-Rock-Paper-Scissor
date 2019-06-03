import React from 'react';

import PlayArea from './Components/PlayArea/PlayArea';
import UserControls from './Components/UserControls/UserControls';

import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Rock-Paper-Scissor</h3>
      <h2>Score</h2>
      <PlayArea/>
      <div style={{
        margin:"20px"
      }}>
      <UserControls value="Rock"/>
      <UserControls value="Paper"/>
      <UserControls value="Scissor"/>
      </div>
    </div>
  );
}

export default App;
