import React from "react";
import './TodoListItem.css';

const TodoListItem = ({todo, onRemovePressed, onMarkedAsCompletePress}) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            {todo.isComplete ? null : <button className="completed-button" onClick={() => onMarkedAsCompletePress(todo.text)}>Mark as Completed</button> }
            <button className="remove-button" onClick={() => onRemovePressed(todo.text)}>Remove</button>
        </div>
    </div>

);

export default TodoListItem;