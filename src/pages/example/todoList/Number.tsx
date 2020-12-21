import React from 'react';
import './Number.css';

class Number extends React.Component<{ number: number }, any> {
  constructor(props) {
    super(props);
    this.state = { numberList: [], tY: 0, move: false };
  }

  componentDidMount() {
    this.setState({
      numberList: [this.props.number]
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.number !== this.props.number) {
      let newArray: number[] = []
      for (let i = prevProps.number; i <= this.props.number; i++) {
        newArray.push(i)
      }

      this.setState({
        numberList: newArray,
        tY: 0,
        move: false
      }, () => {
        setTimeout(() => {
          this.setState({
            tY: (newArray.length - 1) * 24,
            move: true
          })
        }, 100)
      })
    }
  }

  render() {
    return (
      <div className="number-wrapper">
        <div className="number-list" style={{ transform: `translateY(-${this.state.tY}px)`, transition: `${!this.state.move ? 'none' : 'transform 0.5s ease-in'}` }}>
          {this.state.numberList.map(item => (
            <div className="number-item" key={item}>{item}</div>
          ))}
        </div>
      </div>
    )
  }
}

export default Number;