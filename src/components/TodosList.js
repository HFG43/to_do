import TodoItem from './TodoItem';

const TodoList = ({ todosProps, setTodos }) => {
  return (
    <ul className='todo_list_container'>
      {todosProps.map((todo) => (
      <TodoItem key={todo.id} itemProp={todo} setTodos={setTodos} />
    ))}
  </ul>
  );
};
export default TodoList;