import React, { Component } from 'react';

import PlayArea from './Components/PlayArea/PlayArea';
import UserControls from './Components/UserControls/UserControls';

import './App.css';

class App extends Component {

  state = {
    spin: false
  }

  userControlClickHandler = () => {
    let prevSpinState = this.state.spin
    this.setState({
      spin: !prevSpinState
    })
  }

  render() {

    return (
      <div className="App">
        <h3>Rock-Paper-Scissor</h3>
        <h2>Score</h2>
        <PlayArea spin={this.state.spin} />
        <div style={{
          margin: "20px"
        }}>
          <UserControls value="Rock" clicked={this.userControlClickHandler} />
          <UserControls value="Paper" clicked={this.userControlClickHandler} />
          <UserControls value="Scissor" clicked={this.userControlClickHandler} />
        </div>
      </div>
    );
  }
}

export default App;
