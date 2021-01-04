import React, { Component } from "react";
import { Card, Divider } from "antd";
import { homeContext } from "@/utils/context";
import ContextChildren from "./components/Children";
import Consumer from "./components/Consumer";
import ContextVsRedux from "./components/ContextVsRedux";

/**
 * Context的基本使用方法
 *
 * Provider的value修改 子组件的value值修改
 * @version 20200205
 * @author guyanan
 */
class ContextTest extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      contextValue: {
        name: "默认显示-guyanan",
      },
      handleChangeContext: (text) => {
        this.setState({
          contextValue: {
            name: text,
          },
        });
      },
    };
  }

  /**
   * 修改context的值
   */
  handleChangeContext() {
    const { contextValue } = this.state;
    contextValue.name = "父元素改变context的值";
    this.setState({ contextValue });
  }

  render() {
    const { contextValue, handleChangeContext } = this.state;
    return (
      <>
        <Card className={"context-test-wrapper sl-mb-16"}>
          <homeContext.Provider value={{ contextValue, handleChangeContext }}>
            <h1>React Context base usegae</h1>
            <button onClick={this.handleChangeContext.bind(this)}>
              改变context的值
            </button>

            <Divider />

            <ContextChildren />
          </homeContext.Provider>
        </Card>
        <Consumer />

        <ContextVsRedux />
      </>
    );
  }
}

export default ContextTest;
