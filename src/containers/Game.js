import React from 'react';
import Board from '../components/Board.js';
import Winner from '../components/Winner.js';

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gameState: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
      turnNum: 0,
      winner: null
    }
    this.handleTurn = this.handleTurn.bind(this);
  }

  handleTurn(tableCoord) {
    const originalGameState = this.state.gameState;
    const coord = tableCoord.split(':');
    originalGameState[parseInt(coord[1])][parseInt(coord[0])] = this.player();
    const winner = this.getWinner(originalGameState)
    this.setState({gameState: originalGameState, turnNum: this.state.turnNum + 1, winner: winner})
  }

  player() {
    if (this.state.turnNum % 2 === 0){
      return 'X';
    }else {
      return 'O';
    }
  }

  getWinner(board) {
    let winner = this.checkRows(board);
    winner = winner || this.checkColumns(board);
    winner = winner || this.checkFallingDiagonal(board);
    winner = winner || this.checkLeadingDiagonal(board);
    return winner;
  }

  checkRows(board){
    for(let row of board){
      const winner = this.checkWin(row);
      if(winner !== null) return winner;
    }
    return null;
  }

  checkColumns(board){
    for (var columnNum = 0; columnNum < board.length; columnNum++) {
      const column = board.map((row) => {
        return row[columnNum];
      });
      const winner = this.checkWin(column);
      if(winner !== null) return winner;
    };
    return null;
  }

  checkFallingDiagonal(board){
    const fallingDiagonal = board.map((row, index) => {
      return row[index];
    });
    return this.checkWin(fallingDiagonal);
  }

  checkLeadingDiagonal(board){
    const leadingDiagonal = board.map((row, index) => {
      return row[board.length - (1+index)];
    });
    return this.checkWin(leadingDiagonal);
  }

  checkWin(array) {
    const allSame = array.every((cell, index, originalArray) => {
      if(cell === null) return false;
      return cell === originalArray[0];
    })
    if(allSame) return this.player();
    return null;
  }

  render() {
    return (
      <div>
        <Board gameState = {this.state.gameState} onTurn = {this.handleTurn}/>
        <Winner winner={this.state.winner}/>
      </div>
    );
  }

}

export default Game;
