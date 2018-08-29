import React from 'react';

const Cell = (props) => {

  function handleOnClick() {
    props.handleClick(props.coord);
  }

  return (
    <div onClick= {handleOnClick} className="cell">
      {props.content}
    </div>
  );
};

export default Cell;
