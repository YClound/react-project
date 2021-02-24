import React, { useEffect } from "react";

const ReactEvent = () => {
  const handleClickDiv = (e) => {
    console.log("handleClickDiv");
  };

  const handleAddChange = (e) => {
    // React以队列的方式，从触发事件的组件向父组件回溯，调用它们在JSX中声明的callback。也就是React自身实现了一套事件冒泡机制。我们没办法用event.stopPropagation()来停止事件传播
    // e.stopPropagation(); //不能阻止原生事件冒泡；执行顺序： button 原生click事件 -> div 原生click事件 ->handleAddChange
    e.preventDefault();
    // e.nativeEvent原生event对象
    console.log("handleAddChange", e);
  };

  // body点击
  const HandleBodyClick = (e) => {
    console.log("HandleBodyClick");
  };

  useEffect(() => {
    document.body.addEventListener("click", HandleBodyClick);
    /**
     *  https://zhuanlan.zhihu.com/p/25883536
     * 阻止原生事件冒泡 react绑定的click事件不会触发
     * React组件上声明的事件最终绑定到了document这个DOM节点上，而不是React组件对应的DOM节点。故只有document这个节点上面才绑定了DOM原生事件，其他节点没有绑定事件
     * 先触发绑定的原生事件: button原生click事件 -> div原生click事件 -> handleAddChange -> handleClickDiv -> HandleBodyClick;
     */
    document
      .querySelector(".react-event-wrapper button")
      ?.addEventListener("click", (e) => {
        console.log("button 原生click事件");
        // e.stopPropagation();
      });

    document
      .querySelector(".react-event-wrapper div")
      ?.addEventListener("click", (e) => {
        console.log("div 原生click事件");
        // e.stopPropagation();
      });

    return () => {
      document.body.removeEventListener("click", HandleBodyClick);
    };
  }, []);

  return (
    <div className={"react-event-wrapper"}>
      <div onClick={handleClickDiv}>
        <button onClick={handleAddChange}>累加</button>
      </div>
    </div>
  );
};

export default ReactEvent;
