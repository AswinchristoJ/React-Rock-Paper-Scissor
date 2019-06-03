import React, { Component } from 'react';

import PlayArea from './Components/PlayArea/PlayArea';
import UserControls from './Components/UserControls/UserControls';

import './App.css';

class App extends Component {

  state = {
    spin: false,
    bot: 'botRock',
    player: 'playerRock',
  }

  userControlClickHandler = (value) => {

    let prevSpinState = this.state.spin
    this.setState({
      spin: !prevSpinState
    })

    let items = ["Rock", "Paper", "Scissor"]
    let tempPlayerState = 'player'
    let tempBotState = items[Math.floor(Math.random() * items.length)]

    tempPlayerState = tempPlayerState + value
    tempBotState = "bot"+tempBotState

    if (value) {
      this.setState({
        player: tempPlayerState,
        bot: tempBotState
      })
    }
  }

  render() {

    return (
      <div className="App">
        <h3>Rock-Paper-Scissor</h3>
        <h2>Score</h2>
        <PlayArea
          spin={this.state.spin}
          bot={this.state.bot}
          player={this.state.player} />
        <div>
          <UserControls value="Rock" clicked={this.userControlClickHandler} />
          <UserControls value="Paper" clicked={this.userControlClickHandler} />
          <UserControls value="Scissor" clicked={this.userControlClickHandler} />
        </div>
      </div>
    );
  }
}

export default App;
