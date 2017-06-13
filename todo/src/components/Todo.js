import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text }) => (
  <span
  onClick={onClick}
  style={{
    textDecoration: completed ? 'line-through' : 'none'
  }}
  >
  {text}
  </span>
);

Todo.propTypes = {
  onClick: PropTypes.func,
  completed: PropTypes.bool,
  text: PropTypes.string
}

export default Todo
