import React from "react";
import "./Game.css";

class Square extends React.Component<any, any> {
  render() {
    return (
      <div
        className="square"
        onClick={() => {
          this.props.onClick();
        }}
      >
        {this.props.value}
      </div>
    );
  }
}

export default Square;
