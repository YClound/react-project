import React, { Component } from "react";

class ReactState extends Component<any, { count: number }> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.setState({ count: this.state.count + 1 });
    console.log("第一次setState count: ", this.state.count);

    this.setState({ count: this.state.count + 1 });
    console.log("第二次setState count: ", this.state.count);

    /** setState 怎么能不被 “合并” 呢 */
    // this.setState((prevState: any, props) => {
    //   console.log(prevState)
    //   return {
    //     count: prevState.count + 1
    //   }
    // });

    setTimeout(() => {
      this.setState({ count: this.state.count + 1 });
      console.log("第三次setState count: ", this.state.count);

      this.setState({ count: this.state.count + 1 });
      console.log("第四次setState count: ", this.state.count);
    }, 0);
  }
  render() {
    return <div>setState是同步还是异步</div>;
  }
}

export default ReactState;
