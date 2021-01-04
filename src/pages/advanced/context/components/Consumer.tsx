import React, { useState } from "react";
import { consumerContext } from "@/utils/context";
import { Card, Divider, Button } from "antd";

/**
 *  Context.Consumer
 * 函数式组件接收最近的Context Provider提供的value值
 * @author guyanan
 * @version 20200205
 * */
const ContextChildren = () => {
  return (
    <div className="children">
      <consumerContext.Consumer>
        {(value) => (
          <>
            <h2>context value: {value.name}</h2>
            <Button
              type={"primary"}
              onClick={() => {
                value.handleChangeValue("函数组件改变context值");
              }}
            >
              函数组件改变context值
            </Button>
          </>
        )}
      </consumerContext.Consumer>
    </div>
  );
};

const ContextConsumser = () => {
  const [contextValue, setContextValue] = useState({ name: "默认-guyanan" });
  const handleChangeContext = (text?: string) => {
    setContextValue({ name: text || "父元素改变context的值" });
  };

  return (
    <Card className={"context-test-wrapper"}>
      <consumerContext.Provider
        value={{
          name: contextValue.name,
          handleChangeValue: handleChangeContext,
        }}
      >
        <h1>函数组件context的用法</h1>
        <Button onClick={() => handleChangeContext()} type={"primary"}>
          改变context的值
        </Button>

        <Divider />

        <ContextChildren />
      </consumerContext.Provider>
    </Card>
  );
};

export default ContextConsumser;
