import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

interface ITodoList {
  todos: { id: number; completed: boolean; text: string }[];
  onTodoClick: (id: number) => void;
}

const TodoList: React.FC<ITodoList> = ({ todos, onTodoClick }) => (
  // @ts-ignore
  <ul type={"circle"}>
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
