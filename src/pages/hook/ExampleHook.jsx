/**
 * react-hooks新的生命周期表现如下:
 * 函数组件被调用 -> 执行代码 ->根据return的JSX渲染DOM -> 执行useEffect -> 函数组件被重新调用 -> 执行代码 -> 根据return的JSX重新渲染DOM -> 执行useEffect。
 */
import React, { useState, useEffect, useRef, createRef } from 'react';
import { usePrevious } from './utils/usePrevious';
import FancyButton from './ExampleRef';
import ExampleUseReducer from './ExampleUseReducer'

const buttonRef = React.createRef();

export default function ExampleHook() {
  const [count, setCount] = useState(0);
  const buttonUseRefs = useRef({});
  const constUseRef = useRef(0);
  const constCreateRef = createRef();
  const preCountUseRef = useRef();
  const previousRefCount = usePrevious(count);

  const setHookState = () => {
    setCount(count => count + 1);
  }

  useEffect(() => {
    // 更新文档的标题
    document.title = `Hook ${count} times`;
  }, [count]);

  useEffect(() => {
    let pid = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)

    return () => {
      clearInterval(pid);
    }
  }, [])

  /**
   * Refs
   * createRef useState 每次页面更新创建一个新的引用
   * useRef - 页面更新始终返回同一个引用 只改变current的值页面不渲染  页面数据数据更新ref才更新
   * useRef - 生成的ref拥有current属性，且如果没有显示改变current值，那么 ref的 current值 永远不会改变！无论组件被重渲染多少次！
   * 点击Click me按钮 count增加6，点击show alter按钮，继续增加count到10， alter显示You clicked on：6-6-10
   * @see https://zhuanlan.zhihu.com/p/105276393
   * @version 2020.05.18
   * */
  // console.log(buttonRef.current && buttonRef.current.className, buttonUseRefs.current)
  constUseRef.current = count;
  constCreateRef.current = count;

  useEffect(() => {
    // 数据更新了 但是页面未显示
    preCountUseRef.current = count;
  }, [count])

  const handleAlterClick = () => {
    setTimeout(() => {
      alert('You clicked on：' + count + '-' + constCreateRef.current + '-' + constUseRef.current)
    }, 3000)
  }

  const handleRefClick = () => {
    constUseRef.current = count + 1;
    constCreateRef.current = count + 1;
    setCount(count + 1)
  }

  return (
    <div className={'hook-wrapper'}>
      <h1>Hook示例</h1>
      <p>You clicked {count} times</p>
      <button onClick={setHookState}>Click me</button>

      <h1>Refs转发</h1>
      <FancyButton ref={buttonRef}>refs转发</FancyButton>

      <h1>useRef</h1>
      <FancyButton ref={buttonUseRefs}>useref转发</FancyButton>
      <button onClick={handleAlterClick}>show alter</button>
      <div>useRef常量：{constUseRef.current}</div>
      <div>createRef常量：{constCreateRef.current}</div>
      <div>preCountUseRef: {preCountUseRef.current} - {previousRefCount}</div>
      <button onClick={handleRefClick}>改变Ref</button>

      <ExampleUseReducer />
    </div>
  );
}