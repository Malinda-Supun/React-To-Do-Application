import React, {useState} from "react";
import {connect} from "react-redux";
import {createTodo} from "./actions";
import './NewToDoForm.css';

const NewToDoForm = ({todos = [], onCretePressed}) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="new-todo-form">
            <input className="new-todo-input" type="text"
                   placeholder="Type your new todo here."
                   value={inputValue}
                   onChange={event => setInputValue(event.target.value)}
            />
            <button className="new-todo-button" type="button"
                    onClick={() => {
                        console.log('add pressed')
                        const isDuplicateText = todos.some(todo => todo.text === inputValue)
                        console.log('isDuplicateText - >', isDuplicateText)
                        if(!isDuplicateText) {
                            console.log('condition true')
                            console.log('input text ->', inputValue)
                            onCretePressed(inputValue)
                            setInputValue('');
                        }
                    }}> Create Todo
            </button>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todo
});
const mapDispatchToProps = dispatch => ({
    onCretePressed: text => {
        console.log('onCretePressed ->', text);
        dispatch(createTodo(text))}
});

export default connect(mapStateToProps, mapDispatchToProps)(NewToDoForm);