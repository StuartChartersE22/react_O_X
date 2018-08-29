import React from 'react';
import Board from '../components/Board.js';

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gameState: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
      turnNum: 0
    }
  }


  handleTurn(evt) {
    const originalGameState = this.state.gameState;
    const tableCoord = evt.target.value;
    const coord = tableCoord.split(':');
    const cell = originalGameState[parseInt(coord[1])][parseInt(coord[0])];
    if (this.state.turnNum % 2 === 0){
      cell = 'X'
    }
    else {
      cell = 'O'
    }
    this.setState({gameState: originalGameState, turnNum: this.state.turnNum + 1})
  }

  render() {
    return (
      <div>
        <Board gameState = {this.state.gameState}/>
      </div>
    );
  }

}

export default Game;
