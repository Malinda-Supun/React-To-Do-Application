import {CREATE_TODO, MARK_TODO_AS_COMPLETED, REMOVE_TODO} from "./actions";

export const todo = (state = [], action) => {
    const { type, payload } = action;
    switch (type){
        case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
                text,
                isComplete: false
            };
            return state.concat(newTodo);
        }
        case REMOVE_TODO:{
            const { text } = payload;
            return state.filter(todo => todo.text !== text);
        }

        case MARK_TODO_AS_COMPLETED:{
            const {text} = payload;
            console.log('Hello')

           /* const newState = [...state];
            newState.map(todo => {
                if(todo.text === text){
                    todo.isComplete = true;
                }
            });

            return newState;*/

            return state.map(todo => {
                if(todo.text === text){
                    return {...todo, isComplete: true}
                }
                return todo;
            })
        }
        default:
            return state;
    }
}