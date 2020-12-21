import React from 'react';

class Dialog extends React.Component{
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Dialog