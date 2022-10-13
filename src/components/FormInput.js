import React, {useContext, useEffect, useRef, useState} from 'react';
import {DataContext} from "./DataProvider";

function FormInput() {
    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState('');
    const todoInput = useRef();

    const addTodo = e => {
        e.preventDefault()
        setTodos([...todos, {name:todoName, complete:false}])
        setTodoName('')
        todoInput.current.focus();
    }

    useEffect(() => {
        todoInput.current.focus();
    }, [])

    return (
        <form autofocus="off" onSubmit={addTodo}>
            <input type="text"
                   name={'todos'}
                   value={todoName}
                   id={'todos'}
                   required
                   placeholder={'Whats needs to be done?'}
                   onChange={(e) => setTodoName(e.target.value)}
                   ref={todoInput}
            />
            <button type={'submit'}>Create</button>
        </form>
    );
}

export default FormInput;