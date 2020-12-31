import React from "react";
import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";
import Footer from "./Footer";
import styles from "../index.module.scss";

export default function TodoList() {
  return (
    <>
      <AddTodo />
      <Footer />
      <VisibleTodoList />
    </>
  );
}
