import React from 'react';

const Cell = (props) => {

  function handleOnClick() {
    if(props.content !== null) return null;
    props.handleClick(props.coord);
  }

  return (
    <div onClick= {handleOnClick} className="cell">
      {props.content}
    </div>
  );
};

export default Cell;
