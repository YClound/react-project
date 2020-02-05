import React, { Fragment, useEffect } from 'react';
import Example from './Example';
import { useParams, useRouteMatch, useHistory } from 'react-router-dom';

function HookIndex() {
  const { id } = useParams();
  const { location } = useHistory(); // 获取隐式传参的state

  useEffect(() => {
    console.log(id, location.state) 
  }, [])
  
  return (
    <Fragment>
      <div>HookIndex</div>
      <Example />
    </Fragment>
  )
}

export default HookIndex;
