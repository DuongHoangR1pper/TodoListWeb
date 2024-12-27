import React, { useCallback, useEffect, useState } from "react";
import ToDoList from "./components/toDoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { v4 } from "uuid";

const TODO_STORAGE_KEY = "TODO_APP";
function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] =  useState(() => {
    const storgareTodo = localStorage.getItem(TODO_STORAGE_KEY);
    return storgareTodo ? JSON.parse(storgareTodo) : [];
  });
  // useEffect(() => {
  //   const storgareTodo = localStorage.getItem(TODO_STORAGE_KEY);
  //   if (storgareTodo) {
  //     console.log("Loaded from storage:", storgareTodo); // Debug
  //     setTodos(JSON.parse(storgareTodo));
  //   }
  // }, []);
  useEffect(() => {
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  const addToDo = useCallback(() => {
    if (input.trim()) {
      setTodos([...todos, { id: v4(), name: input, isCompleted: false }]);
      setInput("");
    }
  }, [input]);
  const onTextChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);
  const onCheckComplete = useCallback((id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }, []);
  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Textfield
        name="add-todo"
        placeholder="Thêm việc cần làm"
        value={input}
        onChange={onTextChange}
        elemAfterInput={
          <Button
            appearance="primary"
            onClick={addToDo}
            isDisabled={!input.trim()}
          >
            Thêm
          </Button>
        }
      ></Textfield>
      <ToDoList todos={todos} onCheckComplete={onCheckComplete} />
    </>
  );
}

export default App;
