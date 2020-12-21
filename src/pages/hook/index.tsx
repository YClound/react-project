import React, { useEffect, useState } from 'react';
import ExampleHook from './ExampleHook';
import ExampleClass from './ExampleClass'
import { useParams, useHistory } from 'react-router-dom';
import './index.scss';

function HookIndex() {
  const { id = '' } = useParams<any>();
  const { location } = useHistory(); // 获取隐式传参的state
  console.log(id, location.state, 'index')

  const [frined, setFriend] = useState({ id: '1' })
  useEffect(() => {
    setTimeout(() => {
      setFriend({ id: '2' })
    }, 5000)
  }, [])

  return (
    <div className={'hooke-wrapper'}>
      <ExampleHook friend={frined} />
      <ExampleClass friend={frined} />
    </div>
  )
}

export default HookIndex;
