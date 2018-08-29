import React from 'react';
import Cell from './Cell.js';

const Board = (props) => {

  const board = props.gameState.reduce((workingBoard,row, yIndex) => {

    const gameRow = row.map((cell, xIndex) => {
      const cellCoord = `${xIndex}:${yIndex}`
      return (
        <div className="grid-item cell-container" key={cellCoord}>
          <Cell
            coord={cellCoord}
            content={cell}
            handleClick ={props.onTurn}
          />
        </div>
      );
    });

    return workingBoard.concat(gameRow);

  }, []);

  return (
    <div className="grid-container board">
      {board}
    </div>
  );
};

export default Board;
