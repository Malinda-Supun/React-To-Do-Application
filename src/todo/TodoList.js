import React from "react";
import NewToDoForm from "./NewToDoForm";
import TodoListItem from "./TodoListItem";
import {markTodoAsCompleted, removeTodo} from "./actions";
import {connect} from "react-redux";
import './TodoList.css';

const TodoList = ({todos = [], onRemovePressed, onMarkedAsCompletePress}) => (
    <div className="list-wrapper">
        <NewToDoForm />
        {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onMarkedAsCompletePress={onMarkedAsCompletePress}/>)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todo
});
const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onMarkedAsCompletePress: text => dispatch(markTodoAsCompleted(text))
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);