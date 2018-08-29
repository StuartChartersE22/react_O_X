import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.content}
      </div>
    );
  }
}

export default Cell;
