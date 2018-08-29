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
    this.handleTurn = this.handleTurn.bind(this);
  }


  handleTurn(tableCoord) {
    console.log(tableCoord);
    const originalGameState = this.state.gameState;
    const coord = tableCoord.split(':');
    if (this.state.turnNum % 2 === 0){
      originalGameState[parseInt(coord[1])][parseInt(coord[0])] = 'X'
    }
    else {
      originalGameState[parseInt(coord[1])][parseInt(coord[0])] = 'O'
    }
    this.setState({gameState: originalGameState, turnNum: this.state.turnNum + 1})
  }

  render() {
    return (
      <div>
        <Board gameState = {this.state.gameState} onTurn = {this.handleTurn}/>
      </div>
    );
  }

}

export default Game;
