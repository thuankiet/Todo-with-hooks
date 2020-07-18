import React, { useEffect, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

const GlobalStyle = createGlobalStyle`
body {
  background: ${(props) =>
    props.theme.mode === "orange" ? "#f9563a" : "#000"};
  color: white;
  min-height: 100%;
  margin-bottom: 2rem;
}
`;

function App() {
  const [todos, setTodos] = useState([]);
  const [display, setDisplay] = useState(-1);
  const [theme, setTheme] = useState({ mode: "orange" });

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos"));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function changeStatus(data) {
    setDisplay(data);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <header>
          <h1>Todo List Javascript</h1>
        </header>
        <div className="wrappedButton">
          <button
            className="btn button-toggle"
            onClick={(e) =>
              setTheme(
                theme.mode === "orange" ? { mode: "light" } : { mode: "orange" }
              )
            }
          >
            Toggle Theme
          </button>
        </div>
        <Form addTodo={addTodo} changeStatus={changeStatus} />
        <List
          display={display}
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
