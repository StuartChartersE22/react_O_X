import React from 'react';
import Cell from './Cell.js';

const Board = (props) => {

  // function handleOnClick() {
  //   props.onTurn(cellCoord)
  // }

  const board = props.gameState.map((row, yIndex) => {

    const gameRow = row.map((cell, xIndex) => {
      const cellCoord = `${xIndex}:${yIndex}`
      return (
        <td key={cellCoord}
          className="cell"
        >
        <Cell
          coord={cellCoord}
          content={cell}
          handleClick ={props.onTurn}
        />
      </td>);
    });

    return (<tr key={yIndex}>
      {gameRow}
    </tr>);
  });

  return (
    <table>
      <tbody>
        {board}
      </tbody>
    </table>
  );
};

export default Board;
