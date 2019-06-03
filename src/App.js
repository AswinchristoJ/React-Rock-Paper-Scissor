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
  // componentDidUpdate(prevProps, prevState) {

  //   console.log("mounted",prevState.spin,this.state.spin)
  // }

  userControlClickHandler = (value) => {

    let prevSpinState = this.state.spin
    this.setState({
      spin: !prevSpinState
    })

    let tempPlayerState = 'player'

    tempPlayerState = tempPlayerState + value

    if (value) {
      this.setState({ player: tempPlayerState })
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
