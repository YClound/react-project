import React from "react";
import { Card, Select } from "antd";
import TemperatureInput from "./TemperatureInput";
import logo from "@/images/logo.svg";
import helloStyle from "./index.module.scss";
import "@/styles/test.scss";

function BoilingVerdict(props) {
  if (props.celsius > 100) {
    return <p>The water would boil.</p>;
  }

  return <p>The water would not boil.</p>;
}

class Hello extends React.Component<any, any> {
  timerId;

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      value: "coconut",
      temperature: "",
    };

    this.inputHandleChange = this.inputHandleChange.bind(this);
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  inputHandleChange(event) {
    this.setState({ temperature: parseFloat(event.target.value) || 0 });
  }

  handleChange = (value) => {
    this.setState({ value });
  };

  render() {
    return (
      <>
        <Card className={`${helloStyle.wrapper}`}>
          <h1>Hello World</h1>
          <h2>It is {true && this.state.date.toLocaleTimeString()}</h2>

          <Select
            value={this.state.value}
            onChange={this.handleChange}
            style={{ width: "100px" }}
          >
            <Select.Option value="grapefruit">葡萄柚</Select.Option>
            <Select.Option value="lime">酸橙</Select.Option>
            <Select.Option value="coconut">椰子</Select.Option>
            <Select.Option value="mango">芒果</Select.Option>
          </Select>

          <img src={logo} alt="logo" />
        </Card>

        <Card>
          <div>
            <TemperatureInput scale="c" />
            <TemperatureInput scale="f" />
          </div>

          <BoilingVerdict celsius={this.state.temperature} />
        </Card>
      </>
    );
  }
}

export default Hello;
