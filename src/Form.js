import React, { useState } from 'react';
import { Todo } from './Todo';
import { v1 as uuid } from "uuid";

export const Form = () => {
    const [input, setInput] = useState({
        id: '',
        item: ''
    });
    const [todos, setTodos] = useState([]);

    const handleChange = (e) => {
        setInput({item: e.target.value, id: uuid()});
    }

    const handleClick = () => {
        if(input.item === ''){
            alert("Input can't be empty!")
        }else{
        setTodos([...todos, input]);
        setInput({
            id: '',
            item: ''
            });
        }
    }

    const handleDelete = (id) => {
        setTodos(todos.filter(el => el.id !== id))
    }

    const handleDeleteAll = () => {
        setTodos([]);
    }

    return (
        <div className="form">
            <div className="header"><h1>TODO LIST</h1></div><br></br>
            <div className="input-form">
                <input type="text" value={input.item} className="input-form" onChange={e => handleChange(e)} placeholder="New todo..."></input>
                <button className="btn" onClick={e => handleClick(e)}>Add todo</button>
            </div><br></br>
            <div className="todo-form">
                {todos.length ? (
                <div>{todos.map(el => <Todo todo={el.item} key={el.id} handleDelete={() => handleDelete(el.id)} />)}
                </div>) : (<div>No Todo's</div>)}
            </div><br></br><br></br>
            <div className="deleteAll">
                <button className="btn-del-all" onClick={e => handleDeleteAll(e)}>Delete All</button>
            </div>
        </div>
    )
}