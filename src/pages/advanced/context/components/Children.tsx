import React, { Component } from "react";
import { homeContext } from "@/utils/context";

/**
 * 在嵌套组件中更新 Context class组件
 * 从一个在组件树中嵌套很深的组件中更新 context 是很有必要的。
 * 在这种场景下，你可以通过 context 传递一个函数，使得 consumers 组件更新 context：
 */
class ContextChildren extends Component {
  static contextType = homeContext;

  render() {
    const { contextValue, handleChangeContext } = this.context || {};
    const { name } = contextValue || {};

    return (
      <div className={"context-children-wrapper"}>
        <h2>子组件显示context value: {name}</h2>
        <button
          onClick={() => {
            handleChangeContext("子元素修改context值");
          }}
        >
          改变context的值
        </button>
      </div>
    );
  }
}

export default ContextChildren;
