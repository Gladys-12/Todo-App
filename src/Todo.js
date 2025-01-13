import React from 'react';

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
    return (
        <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>Delete</button>
            </div>
        </div>
    );
};

export default Todo;
