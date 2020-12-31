import React from "react";
import { Card } from "antd";
import Count from "@/components/Count";
import styles from "./index.module.scss";

class App extends React.Component<any, any> {
  handleLife(life) {
    console.info(life);
  }

  componentWillMount() {
    this.handleLife("componentWillMount");
  }

  componentDidMount() {
    this.handleLife("componentDidMount");
  }

  componentWillUpdate() {
    this.handleLife("componentWillUpdate");
  }

  componentDidUpdate() {
    this.handleLife("componentDidUpdate");
  }

  componentWillUnmount() {
    this.handleLife("componentWillUnmount");
  }

  componentWillReceiveProps() {
    this.handleLife("componentWillReceiveProps");
  }

  render() {
    return (
      <>
        <Card className={styles["App"]}>
          <h2 className={styles["component-title"]}>Count</h2>
          <div className={styles["component-content"]}>
            <Count />
          </div>
        </Card>
      </>
    );
  }
}

export default App;
