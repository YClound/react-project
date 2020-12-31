import React from "react";
import { Card } from "antd";
import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";
import Footer from "./Footer";

export default function TodoList() {
  return (
    <Card>
      <AddTodo />
      <Footer />
      <VisibleTodoList />
    </Card>
  );
}
