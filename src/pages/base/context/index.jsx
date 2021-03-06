import React, { Component } from 'react';
import ContextChildren from './children';
import { homeContext } from '@/utils/context';

/**
 * Context的基本使用方法
 * 
 * Provider的value修改 子组件的value值修改
 * @version 20200205
 * @author guyanan
 */
class ContextTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contextValue: {
        name: 'guyanan'
      },
      handleChangeContext: (text) => {
        this.setState({
          contextValue: {
            name: text
          }
        })
      }
    }
  }

  handleChangeContext() {
    const { contextValue } = this.state;
    contextValue.name = '父元素改变context的value值';
    this.setState({ contextValue })
  }

  render() {
    return <div className={'context-test-wrapper'} >
      <homeContext.Provider value={this.state}>
        <h1>React Context base usegae</h1>
        <button onClick={this.handleChangeContext.bind(this)}>改变context的值</button>
        <ContextChildren />
      </homeContext.Provider>
    </div>
  }
}

export default ContextTest;