import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>No tasks added yet!</p>
      ) : (
        todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            deleteTodo={deleteTodo} 
            toggleComplete={toggleComplete} 
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
