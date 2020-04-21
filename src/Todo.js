import React from 'react';

export const Todo = ({todo, handleDelete}) => {

    return(
        <div>
            <div>{todo} <button className="btn-del" onClick={handleDelete}>X</button></div>
        </div>
    )
}