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
      ]
    }
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
