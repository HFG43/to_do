import TodoItem from './TodoItem';

const TodoList = ({ todosProps }) => {
  return (
    <ul>
      {todosProps.map((todo) =>(
      <TodoItem key={todo.id} itemProp={todo} />
    ))}
  </ul>
  );
};
export default TodoList;