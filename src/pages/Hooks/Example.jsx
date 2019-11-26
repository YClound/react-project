import React, { useState, useEffect } from 'react';

function Example(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Tom');

  const setHookState = () => {
    setCount(() => count + 1);
    setName(() => { return 'Json' })
  }

  useEffect(() => {
    // 更新文档的标题
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>name: {name}</p>
      <button onClick={setHookState}>
        Click me
      </button>
    </div>
  );
}

export default Example;