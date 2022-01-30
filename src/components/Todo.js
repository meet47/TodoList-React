import React from 'react'

export default function Todo({ todoitem, onDelete }) {
    return (
        <div className="">
            <h4>{todoitem.title}</h4>
            <p>{todoitem.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todoitem) }}>Delete</button>
        </div>
    )
}
