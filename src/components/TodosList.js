const TodoList = ({ todosProps }) => {
  return (
    <ul>
      {todosProps.map((todo) =>(
      <li>{todo.title}</li>
    ))}
  </ul>
  );
};
export default TodoList;