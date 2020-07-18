import React, { useState } from "react";
import shortId from "shortid";

function Form({ addTodo, changeStatus }) {
  const [todo, setTodo] = useState({
    description: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, description: e.target.value });
  }

  function handleStatusChange(e) {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    changeStatus(name === "changeStatus" ? value : -1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.description.trim()) {
      addTodo({ ...todo, id: shortId.generate() });
      setTodo({ ...todo, description: "" });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          maxLength={40}
          name="description"
          onChange={handleTaskInputChange}
          value={todo.description}
        />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square" />
        </button>
        <div className="select">
          <select
            name="changeStatus"
            defaultValue={-1}
            className="filter-todo"
            onChange={handleStatusChange}
          >
            <option value={-1}>All</option>
            <option value={0}>Completed</option>
            <option value={1}>Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
