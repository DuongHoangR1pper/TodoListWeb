import React from "react";
import "./toDo.scss";
import { FaCheck } from "react-icons/fa";

export default function ToDo({ todo, onCheckComplete }) {
  return (
    <button
      className="todo-button"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }} // Sửa lại
    >
      {todo.name}
      <span className="check-icon" onClick={() => onCheckComplete(todo.id)}>
        <FaCheck />
      </span>
    </button>
  );
}