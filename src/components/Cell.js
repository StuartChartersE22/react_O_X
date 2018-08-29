import React from 'react';

const Cell = (props) => {

  function handleOnClick() {
    console.log(props.coord);
    props.handleClick(props.coord);
  }

  return (
    <div onClick= {handleOnClick} className="input">
      {props.content}
    </div>
  );
};

export default Cell;
