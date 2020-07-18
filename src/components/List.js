import React from "react";
import Todo from "./Todo";

function List({ todos, toggleComplete, removeTodo, display }) {
  let displayStatus = parseInt(display);
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {displayStatus === -1 &&
            todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                removeTodo={removeTodo}
              />
            ))}

          {displayStatus === 0 &&
            todos.map((todo) => {
              if (todo.completed === true) {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo}
                  />
                );
              }
            })}

          {displayStatus === 1 &&
            todos.map((todo) => {
              if (todo.completed === false) {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo}
                  />
                );
              }
            })}
        </ul>
      </div>
    </div>
  );
}

export default List;
