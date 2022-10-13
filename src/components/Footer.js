import React, {useContext, useState} from 'react';
import {DataContext} from "./DataProvider";

function Footer(props) {
    const [checkAll, setCheckAll] = useState(false);
    const [todos, setTodos] = useContext(DataContext);

    const handleCheckAll = () => {
        const newTodos = [...todos];
        newTodos.forEach((todo) => {
            todo.complete = !checkAll
        })
        setTodos(newTodos)
        setCheckAll(!checkAll)
    }

    const newTodoComplete = () => {
        return todos.filter(todo => todo.complete === false)
    }

    const handleDeleteTodo = () => {
        todos.filter(todo => todo.complete === false)
        setTodos(newTodoComplete())
        setCheckAll(false)
    }
    return (
        <>
            {todos.length === 0
                ? <h2>Congratulations! Nothings To Do</h2>
                : <div className="row">
                    <label htmlFor="all">
                        <input type="checkbox" name={'all'} id={'all'} onChange={handleCheckAll} checked={checkAll}/>
                        All
                    </label>
                    <p>You have {newTodoComplete().length} to do</p>
                    <button id={'delete'} onClick={handleDeleteTodo}>Delete</button>
                </div>
            }
        </>

    );
}

export default Footer;