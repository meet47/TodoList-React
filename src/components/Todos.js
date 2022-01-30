import React from 'react'
import Todo from './Todo';

function Todos(props) {
    return (
        <>
            <div className="container">
                <h3 className="my-3">TODOs List</h3>
                {props.todos.length === 0 ? "No TODOs to display!" :
                    props.todos.map((todo) => {
                        return <Todo todoitem={todo} key={todo.sno} onDelete={props.onDelete} />
                    })
                }
            </div>
        </>
    )
}

export default Todos;