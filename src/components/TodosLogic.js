import { useState } from 'react';
import InputTodo from "./InputTodo";
import TodoList from "./TodosList";

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Test 1",
      completed: false,
    },
    {
      id: 2,
      title: "Test 2",
      completed: false,
    },
    {
      id: 3,
      title: "Test 3",
      completed: false,
    },
  ]);
  return (
    <div>
      <InputTodo />
      <TodoList todosProps={todos} setTodos={setTodos} /> 
    </div>
  );
};

export default TodosLogic;
