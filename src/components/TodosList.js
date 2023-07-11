import TodoItem from './TodoItem';

const TodoList = ({ todosProps }) => {
  return (
    <ul>
      {todosProps.map((todo) =>(
      <TodoItem itemProp={todo} />
    ))}
  </ul>
  );
};
export default TodoList;