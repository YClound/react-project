import React, { FC } from "react";
import PropTypes from "prop-types";

interface ITodo {
  completed: boolean;
  text: string;
  onClick: () => void;
}

const Todo: FC<ITodo> = (props) => {
  const { onClick, completed, text } = props;

  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none",
        color: completed ? "#e9e9e9" : "#0a0a0a",
      }}
    >
      {text}
    </li>
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
