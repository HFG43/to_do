import InputTodo from "./InputTodo";
import TodoList from "./TodosList";

const TodosLogic = () => {
  const todos = [
    {
      id: 1,
      title: "first item",
      completed: false,
    },
    {
      id: 2,
      title: "second item",
      completed: false,
    },
    {
      id: 3,
      title: "third item",
      completed: false,
    },
  ];
  return (
    <div>
      <InputTodo />
      <TodoList todosProps={todos}/> 
    </div>
  );
};

export default TodosLogic;
