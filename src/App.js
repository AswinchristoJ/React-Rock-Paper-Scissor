import React, { Component } from 'react';
import Swal from 'sweetalert2'

import PlayArea from './Components/PlayArea/PlayArea';
import UserControls from './Components/UserControls/UserControls';
import ScoreArea from './Components/ScoreArea/ScoreArea';
import img from './assets/images/nyan-cat.gif'

import './App.css';

class App extends Component {

  state = {
    spin: false,
    botScoreFade: false,
    playerScoreFade: false,
    botScore: 0,
    playerScore: 0,
    bot: 'botRock',
    player: 'playerRock',
  }

  componentDidUpdate(){
    this.checkClose()
  }

  userControlClickHandler = (value) => {

    let prevSpinState = this.state.spin
    this.setState({
      spin: !prevSpinState,
      botScoreFade: false,
      playerScoreFade: false
    })

    let items = ["Rock", "Paper", "Scissor"]
    let tempPlayerState = 'player'
    let tempBotState = items[Math.floor(Math.random() * items.length)]
    let botValue = tempBotState
    tempPlayerState = tempPlayerState + value
    tempBotState = "bot" + tempBotState

    if (value) {
      this.setState({
        player: tempPlayerState,
        bot: tempBotState,
      })

      this.updatingScore(botValue, value)
    }
  }

  updatingScore = (bot, player) => {

    let tempBotScore = this.state.botScore
    let tempPlayerScore = this.state.playerScore
    if (bot === player) {
      tempBotScore = tempBotScore + 1
      tempPlayerScore = tempPlayerScore + 1
      this.setState({
        botScoreFade: true,
        playerScoreFade: true,
        botScore: tempBotScore,
        playerScore: tempPlayerScore,
      })
    } else if ((bot === "Rock" && player === "Scissor") || (bot === "Paper" && player === "Rock") || (bot === "Scissor" && player === "Paper")) {
      tempBotScore = tempBotScore + 1
      this.setState({
        botScoreFade: true,
        botScore: tempBotScore,
      })
    } else if ((bot === "Scissor" && player === "Rock") || (bot === "Rock" && player === "Paper") || (bot === "Paper" && player === "Scissor")) {
      tempPlayerScore = tempPlayerScore + 1
      this.setState({
        playerScoreFade: true,
        playerScore: tempPlayerScore,
      })
    }
  }

  checkClose = () => {
    let closeText = ""
    if (this.state.botScore === 5 && this.state.playerScore === 5) {
      closeText = "The game is drawn"
      this.close(closeText)
    } else if (this.state.botScore === 5) {
      closeText = "You Lose...\nthis time"
      this.close(closeText)
    } else if (this.state.playerScore === 5) {
      closeText = "You Won!!!.....\nHurrAy!"
      this.close(closeText)
    }
  }

  close(closeText){
    Swal.fire({
      title: closeText,
      animation: true,
      width: 600,
      padding: '3em',
      backdrop: `
        rgba(0,0,123,0.4)
        url(${img})
        center left
        repeat
      `
    }).then((e) => {
      if (e) {
        window.location.reload()
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h3>Rock-Paper-Scissor</h3>
        <ScoreArea
          botPoints={this.state.botScore}
          playerPoints={this.state.playerScore}
          botFaded={this.state.botScoreFade}
          playerFaded={this.state.playerScoreFade} />
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
