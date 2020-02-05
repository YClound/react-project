import React from 'react';
import TemperatureInput from './TemperatureInput.jsx';
import Dialog from './Dialog.jsx'
import logo from '../../images/logo.svg'
import helloStyle from '../../styles/hello.module.scss';
import '../../styles/test.scss'

function BoilingVerdict(props) {
  if (props.celsius > 100) {
    return <p>The water would boil.</p>;
  }

  return <p>The water would not boil.</p>;
}

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      value: 'coconut',
      temperature: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.inputHandleChange = this.inputHandleChange.bind(this);

    console.log(props, '11111111')
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  inputHandleChange(event) {
    this.setState({ temperature: parseFloat(event.target.value) || 0 })
  }

  render() {
    return (
      <div className={helloStyle.wrapper}>
        <h1>Hello World</h1>
        <h2>It is {true && this.state.date.toLocaleTimeString()}</h2>

        <select name="SelectForm" value={this.state.value} onChange={this.handleChange}>
          <option value="grapefruit">葡萄柚</option>
          <option value="lime">酸橙</option>
          <option value="coconut">椰子</option>
          <option value="mango">芒果</option>
        </select>

        <img src={logo} alt="logo"/>

        <div>
          <TemperatureInput scale="c" />
          <TemperatureInput scale="f" />
        </div>
        
        <BoilingVerdict celsius={this.state.temperature} />

        <Dialog>
          <div>111</div>
        </Dialog>
      </div>
    )
  }
}

export default Hello;