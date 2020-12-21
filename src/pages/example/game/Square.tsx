import React from 'react';
import './Game.css';

class Square extends React.Component<any, any> {
  render() {
    return (
      <button 
        className="square" 
        onClick={() => { this.props.onClick() }}>
        {this.props.value}
      </button>
    )
  }
}


export default Square;