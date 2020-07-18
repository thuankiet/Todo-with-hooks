import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <div className={"todo" + (todo.completed ? " completed" : "")}>
      <li className={"todo-item"}>{todo.description}</li>
      <button className="check-btn" onClick={handleCheckboxClick}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={handleRemoveClick}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
