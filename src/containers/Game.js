import React from 'react';

class Game {
  constructor(props) {
    super(props)
    this.state = {
      gameState: [[],[],[]]
    }
  }

  render() {
    return (
      <div>
        <NewGame/>
        <Board gameState = {this.state.gameState}/>
      </div>
    );
  }

}

export default Game;
