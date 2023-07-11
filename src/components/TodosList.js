import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todosProps, setTodos }) => (
  <ul className="todo_list_container">
    {todosProps.map((todo) => (
      <TodoItem key={todo.id} itemProp={todo} setTodos={setTodos} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todosProps: PropTypes.string.isRequired,
  setTodos: PropTypes.func.isRequired,
};
export default TodoList;
