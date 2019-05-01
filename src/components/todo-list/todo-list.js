import React from "react";
import TodoListItem from "../todo-list-item";
import "./todo-list.css";
const TodoList = ({ tasks, onDeleted, onToggleDone, onToggleImportant }) => {
  const items = tasks.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li className="list-group-item" key={id}>
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{items}</ul>;
};

export default TodoList;
