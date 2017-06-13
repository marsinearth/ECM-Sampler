import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick, onDelClick }) => (
  <ul>
  {todos.map(todo =>
    <li>
    <Todo
    key={todo.id}
    {...todo}
    onClick={() => onTodoClick(todo.id)}
    />
    <button 
    key={'button_' + String(todo.id)} 
    onClick={() => onDelClick(todo.id)}
    >
    delete
    </button>
    </li>
  )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    completed: PropTypes.bool,
    text: PropTypes.string
  })),
  onTodoClick: PropTypes.func,
  onDelClick: PropTypes.func
}

export default TodoList;
