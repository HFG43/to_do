import TodoItem from './TodoItem';

const TodoList = ({ todosProps }) => {
  return (
    <ul className='todo_list_container'>
      {todosProps.map((todo) =>(
      <TodoItem key={todo.id} itemProp={todo} />
    ))}
  </ul>
  );
};
export default TodoList;