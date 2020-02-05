import React, { Component } from 'react';
import { consumerContext } from '../../utils/context';

/**
 *  Context.Consumer 
 * 函数式组件接收最近的Context Provider提供的value值
 * @author guyanan
 * @version 20200205
 * */
const ContextChildren = (props) => {
  return <div className="children">
    <consumerContext.Consumer>
      {value => <div className={'consumer-content'}>context value: {value.name}</div>}
    </consumerContext.Consumer>
  </div>
}

class ContextConsumser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contextValue: {
        name: 'guyanan'
      }
    }
  }

  handleChangeContext() {
    this.setState({
      contextValue: {
        name: '父元素改变context的值'
      }
    })
  }

  render() {
    return <div className={'context-test-wrapper'} >
      <consumerContext.Provider value={this.state.contextValue}>
        <h1>React Context base usegae</h1>
        <button onClick={this.handleChangeContext.bind(this)}>改变context的值</button>
        <ContextChildren />
      </consumerContext.Provider>
    </div>
  }
}

export default ContextConsumser;